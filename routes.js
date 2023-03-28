const asyncHandler = require('express-async-handler');
const { loginUserSchema, searchListingsSchema, newReviewSchema } = require('./validators');
const sequelize = require('sequelize');
const net = require('net');
const { Op } = sequelize;

/*
	Routes
	Contains routes.

	If you write a route that's an async function, you need
	to wrap it with asyncHandler().
*/

function redirectLogin(req, res) {
	return res.redirect(`/user/login?redirectURI=${encodeURIComponent(req.originalUrl)}`);
}

function requiresAuth(routeFunc) {
	return async (req, res) => {
		if (!req.user) {
			redirectLogin(req, res);
		} else {
			await routeFunc(req, res);
		}
	};
}

module.exports = (app, models) => {
	const { User, Address, ToolCategory, ToolMaker, Tool, Listing, UserMessage, UserReview, FileUpload } = models;

	app.get('/', asyncHandler(async (req, res) => {
		res.render('index.html', {});
	}));

	/*
	 * User Creation/Editing
	 */

	app.get('/user/new', asyncHandler(async (req, res) => {
		if (req.user) {
			res.redirect('/');
		} else {
			res.render('new_user.html', {});
		}
	}));

	app.post('/user/new.json', asyncHandler(async (req, res) => {
		const { first_name, last_name, email, password,
			line_one, line_two, city, state, zip_code } = req.body;

		const address = await Address.create({ line_one, line_two, city, state, zip_code });

		const user = await User.create({ active: true, first_name, last_name, email, address_id: address.id });
		await user.setPassword(password);
		await user.save();
		await res.setUser(user);
		res.json({ user });
	}));

	app.post('/user/edit', asyncHandler(requiresAuth(async (req, res) => {
		const { first_name, last_name, email, password, active,
			line_one, line_two, city, state, zip_code } = req.body;

		const user = req.user;
		user.first_name = first_name;
		user.last_name = last_name;
		user.email = email;
		user.active = active === 'on';

		if (password) {
			await user.setPassword(password);
		}

		await user.save();
		res.redirect(`/user/me`);
	})));



	/*
	 * User Login
	 */

	app.get('/user/login', asyncHandler(async (req, res) => {
		const { redirectURI } = req.query;
		if (req.user) {
			res.redirect(redirectURI ?? '/');
		} else {
			res.render('login.html', { error: null, redirectURI });
		}
	}));

	app.post('/user/login', asyncHandler(async (req, res) => {
		const { email, password, redirectURI } = await loginUserSchema.validate(req.body);
		let u = await models.User.findAll({ where: { email: email } });
		u = u.length > 0 ? u[0] : null;

		if (u && u.passwordMatches(password)) {
			await res.setUser(u);
			res.redirect(redirectURI ?? '/');
		} else {
			res.render('login.html', { error: "Invalid username or password." });
		}
	}));

	/*
	 * User/Account viewing
	 */

	app.get('/user', asyncHandler(async (req, res) => {
		const users = await models.User.findAll();
		res.render('users_list.html', { users });
	}));

	app.get('/user/me', asyncHandler(requiresAuth(async (req, res) => {
		res.render('user_singular.html', { user: req.user });
	})));

	app.get('/user/:user_id', asyncHandler(async (req, res) => {
		const { user_id } = req.params;
		const user = await User.findByPk(user_id);
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.render('user_singular.html', { user });
	}));

	/*
	 * View a User's Tools
	 */

	app.get('/user/:user_id/tools', asyncHandler(async (req, res) => {
		const { user_id } = req.params;
		const owner = user_id === 'me' ? req.user : await User.findByPk(user_id);

		if (!owner) {
			return res.status(404).json({ error: "User not found." });
		}

		const tools = await Tool.findAll({ where: { owner_id: owner.id } });

		res.render('tool_list.html', { tools, user: owner });
	}));

	/*
		Add Tools to User
	*/
	app.get('/tool/new', asyncHandler(requiresAuth(async (req, res) => {
		const toolCategories = ToolCategory.findAll();
		const toolMakers = ToolMaker.findAll();

		res.render('_add_tool.html', { toolCategories, toolMakers });
	})));

	app.post('/tool/new', app.upload.single('manual'), asyncHandler(requiresAuth(async (req, res) => {
		console.log('FILE', req.file);
		const { name, description, tool_category_id, tool_maker_id } = req.body;

		const tool = await models.Tool.create({
			name, description, owner_id: req.user.id,
			tool_maker_id, tool_category_id
		});

		const uploadedFile = req.file;
		if (uploadedFile) {
			const fu = await FileUpload.create({
				originalName: uploadedFile.originamname,
				mimeType: uploadedFile.mimetype,
				size: uploadedFile.size,
				path: uploadedFile.path,
				storedIn: uploadedFile.destination,
				uploader_id: req.user.id
			});
			await tool.setManual(fu);
			await tool.save();
		}

		res.redirect(`/user/me/tools`);
	})));

	/*
		Edit a Tool
	*/

	app.get('/tool/edit/:tool_id', asyncHandler(requiresAuth(async (req, res) => {
		const { tool_id } = req.params;

		const tool = await models.Tool.findByPk(tool_id, { include: [{ model: FileUpload, as: 'manual' }] });

		if (!tool) {
			return res.status(404).json({ error: "Tool not found." });
		}

		const toolCategories = await ToolCategory.findAll();
		const toolMakers = await ToolMaker.findAll();

		// Only allow the owner to edit the tool
		if (tool.owner_id !== req.user.id) {
			return res.status(403).json({ error: "You are not authorized to edit this tool." });
		}

		res.render('_edit_tool.html', { tool, toolCategories, toolMakers });
	})));

	app.post('/tool/edit/:tool_id', app.upload.single('manual'), asyncHandler(requiresAuth(async (req, res) => {
		const { tool_id } = req.params;
		const { name, description, tool_category_id, tool_maker_id } = req.body;

		const tool = await models.Tool.findByPk(tool_id);

		if (!tool) {
			return res.status(404).json({ error: "Tool not found." });
		}

		// Only allow the owner to edit the tool
		if (tool.owner_id !== req.user.id) {
			return res.status(403).json({ error: "You are not authorized to edit this tool." });
		}

		// Update the tool with the new data
		tool.name = name;
		tool.description = description;
		tool.tool_category_id = tool_category_id;
		tool.tool_maker_id = tool_maker_id;
		await tool.save();

		const uploadedFile = req.file;
		if (uploadedFile) {
			const fu = await FileUpload.create({
				originalName: uploadedFile.originamname,
				mimeType: uploadedFile.mimetype,
				size: uploadedFile.size,
				path: uploadedFile.path,
				storedIn: uploadedFile.destination,
				uploader_id: req.user.id
			});
			await tool.setManual(fu);
		}

		res.redirect(`/user/me/tools`);
	})));

	/*
			  Delete a tool
	*/

	app.get('/tool/delete/:tool_id', asyncHandler(requiresAuth(async (req, res) => {
		const { tool_id } = req.params;
		const tool = await Tool.findByPk(tool_id);

		if (!tool) {
			return res.status(404).json({ error: "Tool not found." });
		}

		if (tool.owner_id !== req.user.id) {
			return res.status(401).json({ error: "Unauthorized." });
		}

		await tool.destroy();

		res.redirect(`/user/me/tools`);
	})));

	// TODO: tool editing endpoints

	/*
	 * Settings Pages
	 */

	app.get('/account', asyncHandler(async (req, res) => {
		res.render('account.html', { error: null });
	}));

	/*
 * About Pages
 */

	app.get('/about', asyncHandler(async (req, res) => {
		res.render('about.html', { error: null });
	}));

	app.get('/about/terms_of_use', asyncHandler(async (req, res) => {
		res.render('terms_of_use.html', { error: null });
	}));

	app.get('/about/faqs', asyncHandler(async (req, res) => {
		res.render('faqs.html', { error: null });
	}));

	app.get('/about/avoid_scams', asyncHandler(async (req, res) => {
		res.render('avoid_scams.html', { error: null });
	}));

	/*
	 * API Pages
	 */

	app.get('/search', asyncHandler(async (req, res) => {
		res.render('_recommendFromSearch.html', { error: null });
	}));

	/*
		Create a listing for a tool
	*/
	app.get('/user/:user_id/listing/new', asyncHandler(async (req, res) => {
		const { user_id } = req.params;
		const owner = user_id === 'me' ? req.user : await User.findByPk(user_id);

		if (!owner) {
			return res.status(404).json({ error: "User not found." });
		}

		const tools = await Tool.findAll({ where: { owner_id: owner.id } });
		res.render('_add_listing.html', { tools });
	}));

	app.post('/user/:user_id/listing/new', asyncHandler(async (req, res) => {
		const { toolId, price, billingInterval, maxBillingIntervals } = req.body;
		const listing = await models.Listing.create({ price, billingInterval, maxBillingIntervals, tool_id: toolId });
		const tool = await models.Tool.findByPk(toolId);

		await listing.setTool(tool);

		res.redirect(`/user/me/listings`);
	}));


	/*
	 * View a User's Listings 
	*/

	app.get('/user/:user_id/listings', asyncHandler(async (req, res) => {
		const { user_id } = req.params;
		const owner = user_id === 'me' ? req.user : await User.findByPk(user_id);

		if (!owner) {
			return res.status(404).json({ error: "User not found." });
		}

		const listings = await models.Listing.findAll({
			where: { active: true },
			include: [{
				model: models.Tool,
				as: 'tool',
				where: {
					owner_id: owner.id
				}
			}]
		})
		res.render('listing_list.html', { listings, user: owner, tool: listings.map(l => l.tool) });
	}));

	/*
		Edit a Listing
	*/

	app.get('/user/:user_id/edit/:listing_id', asyncHandler(requiresAuth(async (req, res) => {
		const { user_id } = req.params;
		const owner = user_id === 'me' ? req.user : await User.findByPk(user_id);
		const { listing_id } = req.params;

		const listing = await models.Listing.findByPk(listing_id);

		console.log(listing)
		if (!listing) {
			return res.status(404).json({ error: "Listing not found." });
		}


		res.render('_edit_listing.html', { listing, user_id, listing_id });
	})));

	app.post('/user/:user_id/edit/:listing_id', asyncHandler(requiresAuth(async (req, res) => {
		const { user_id } = req.params;
		const owner = user_id === 'me' ? req.user : await User.findByPk(user_id);
		const { listing_id } = req.params;
		const { price, billingInterval, maxBillingIntervals } = req.body;

		const listing = await models.Listing.findByPk(listing_id);

		if (!listing) {
			return res.status(404).json({ error: "Listing not found." });
		}


		// Update the listing data with the new data
		listing.price = price;
		listing.billingInterval = billingInterval;
		listing.maxBillingIntervals = maxBillingIntervals;
		await listing.save();

		res.redirect(`/user/me/listings`);
	})));

	// TODO: listing editing endpoints

	/*
	 * Listings
	 */
	app.get('/listings/search.json', asyncHandler(async (req, res) => {
		const {
			searchQuery, // string
			searchRadius, // kilometers
			userLat, userLon, // degrees
			useUserAddress, // boolean
			selectedCategory // string from dropdown menu // find out why this is undefined
		} = await searchListingsSchema.validate(req.query);

		let lat = userLat;
		let lon = userLon;
		if (req.user && useUserAddress) {
			let a = req.user.getAddress();
			if (a) {
				if (a.ensureGeocoded()) {
					lat = a.geocoded_lat;
					lon = a.geocoded_lon;
				}
			}
		}

		lat = `radians(${lat})`;
		lon = `radians(${lon})`;
		let ownersLat = `radians("tool->owner->address"."geocoded_lat")`;
		let ownersLon = `radians("tool->owner->address"."geocoded_lon")`;

		const distanceKm = `(6371 * acos(cos(${lat}) * cos(${ownersLat}) * cos(${lon} - ${ownersLon}) + sin(${lat}) * sin(${ownersLat})))`;

		let results = await models.Listing.findAll({
			where: { active: true },
			include: [{
				model: models.Tool,
				as: 'tool',
				where: !searchQuery ? {} : {
					searchVector: {
						[Op.match]: sequelize.fn('to_tsquery', searchQuery)
					}
				},
				include: [{
					model: models.User,
					as: 'owner',
					required: true,
					include: [{
						model: models.Address,
						as: 'address',
						required: true,
						attributes: {
							include: [[
								sequelize.literal(distanceKm),
								'distance'
							]]
						},
						order: sequelize.col('distance'),
						where: sequelize.literal(`${distanceKm} < ${searchRadius}`)
					}]
				}]
			}]
		});
		res.json({ results });
	}));

	/*
	* User Messaging
	*/

	app.get('/inbox', asyncHandler(requiresAuth(async (req, res) => {
		const senderId = req.user.id;
		const allMessages = await models.UserMessage.findAll({
			where: {
				[Op.or]: [
					{ recipient_id: req.user.id },
					{ sender_id: req.user.id }
				]
			},
			order: [
				['createdAt', 'ASC']
			]
		});

		const messages = {}; // Other user id => [UserMessage], [oldest, ...., newest]
		for (const m of allMessages) {
			const otherId = m.recipient_id === req.user.id ? m.sender_id : m.recipient_id;
			if (!messages[otherId]) messages[otherId] = [];
			messages[otherId].push(m);
		}

		// [{with: <User object>, messages: [UserMessage]}, ...]
		const conversations = [];
		for (const [otherId, messageArr] of Object.entries(messages)) {
			conversations.push({
				with: models.User.findByPk(otherId),
				messages: messageArr
			});
		}

		// templates/inbox.html renders something like what you see when you first open
		// your texting/SMS app - a list of conversations. This is represented by the `conversations` variable
		res.render('inbox.html', {conversations, senderId}); // auth'd user is authUser
	})));

	app.get('/inbox/:user_id', asyncHandler(requiresAuth(async (req, res) => {
		const { user_id } = req.params;

		const messages = await models.UserMessage.findAll({
			where: {
				[Op.and]: [
					{
						[Op.or]: [
							{ recipient_id: req.user.id },
							{ sender_id: req.user.id }
						]
					},
					{
						[Op.or]: [
							{ recipient_id: user_id },
							{ sender_id: user_id }
						]
					}
				]
			},
			order: [
				['createdAt', 'ASC']
			]
		});

		// templates/user_messaging.html renders all the messages in a conversation.
		res.render('user_messaging.html', { messages, user_id }); // auth'd user is authUser
	})));

	// Sends a message.
	app.post('/inbox/:user_id/send.json', asyncHandler(requiresAuth(async (req, res) => {
		const { content } = req.body;
		const { user_id } = req.params;

		try {
			const message = await models.UserMessage.create({
				content, sender_id: req.user.id, recipient_id: user_id
			});

			res.json({ status: 'ok', error: null, message });
		} catch (error) {
			res.json({ status: 'failure', error, message: null });
		}
	})));

	let unixListeners = [];
	UserMessage.messageCreated = msg => {
		for (const f of unixListeners) {
			f(msg);
		}
	};

	app.ws('/websocket/inbox/:user_id', asyncHandler(async (ws, req) => {
		const handleData = userMessage => {
			if (userMessage.recipient_id === req.user.id) {
				ws.send(JSON.stringify(userMessage));
			}
		};
		unixListeners.push(handleData);
		ws.on('close', () => {
			unixListeners = unixListeners.filter(x => x !== handleData);
		});
	}));

	/*
	 * User Reviews
	 */

	/* Create a review on another user*/
	app.get('/review/users', asyncHandler(async (req, res) => {
		const users = await models.User.findAll();
		res.render('user_reviews.html', { users });
	}));

	app.get('/review/new/:reviewee_id', asyncHandler(requiresAuth(async (req, res) => {
		const { reviewee_id } = req.params;
		res.render('create_user_review.html', { reviewee_id });
	})));

	app.post('/review/new', asyncHandler(requiresAuth(async (req, res) => {
		const { content, ratings, reviewee_id } = await newReviewSchema.validate(req.body);
		const one_review = await models.UserReview.create({
			content, ratings, reviewee_id, reviewer_id: req.user.id
		});

		if (one_review) {
			res.redirect(`/user/me`);
		} else {
			res.status(500);
		}
	})));

	/* View my reviews */
	app.get('/user/:user_id/reviews', asyncHandler(async (req, res) => {
		const { user_id } = req.params;
		const reviewee = user_id === 'me' ? req.user : await User.findByPk(user_id);

		if (!reviewee) {
			return res.status(404).json({ error: "User not found." });
		}

		const reviews = await UserReview.findAll({
			where: { reviewee_id: reviewee.id },
			include: {
				model: models.User,
				as: 'reviewer',
				attributes: ['email']
			}
		});
		res.render('review_list.html', { reviews, user: reviewee });
	}));
};


