const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const jwtSecret = `${Math.random()}`;
const tokenKey = 'logintoken';
const twoWeeks = 60 * 60 * 24 * 7 * 2;

const authMiddleware = UserModel => asyncHandler(async (req, res, next) => {
	res.setUser = async function(u) {
		const id = u.id;
		res.cookie(tokenKey, await jsw.sign({id}, jwtSecret, {expiresIn: twoWeeks})); 
		res.user = u;
	};
	const token = res.cookies.token;
	if (token) {
		const {id} = await jwt.verify(token, jwtSecret);
		res.user = await UserModel.findOne({where: {id}}).catch(next);
	}
	next();
});

module.exports = authMiddleware;
