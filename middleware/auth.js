const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const jwtSecret = `${Math.random()}`;
const tokenKey = 'logintoken';

const authMiddleware = UserModel => asyncHandler(async (req, res, next) => {
	res.setUser = async function(u) {
		if (u) {
			const pkAttribute = UserModel.primaryKeyAttribute ?? "id";
			const pk = JSON.stringify(u[pkAttribute]);
			const v = await jwt.sign(pk, jwtSecret);
			res.cookie(tokenKey, v);
		} else {
			res.clearCookie(tokenKey);
		}
		req.user = u;
	};

	const token = req.cookies[tokenKey];
	if (token) {
		try {
			const pk = JSON.parse(await jwt.verify(token, jwtSecret));
			req.user = await UserModel.findByPk(pk);
		} catch {}
	}
	next();
});

module.exports = authMiddleware;
