const yup = require('yup');

const loginUserSchema = yup.object({
	email: yup.string().email(),
	password: yup.string()
});

module.exports = loginUserSchema;
