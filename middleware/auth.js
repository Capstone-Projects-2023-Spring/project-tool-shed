const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const jwtSecret = `${Math.random()}`;
const tokenKey = 'logintoken';
const twoWeeks = 60 * 60 * 24 * 7 * 2;

const authMiddleware = UserModel => asyncHandler(async (req, res, next) => {
	res.setUser = async function(u) {
		const id = u.id;
		let v = await jwt.sign({id}, jwtSecret, {expiresIn: twoWeeks});
		res.cookie(tokenKey, v); 
		req.user = u;
	};
	const token = req.cookies[tokenKey];
	if (token) {
		try {
			const resp = await jwt.verify(token, jwtSecret);
			const id = resp.id;
			req.user = await UserModel.findOne({where: {id}});
		} catch {}
	}
	next();
});

module.exports = authMiddleware;
