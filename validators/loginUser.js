const yup = require('yup');

const loginUserSchema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().required()
});

module.exports = loginUserSchema;
