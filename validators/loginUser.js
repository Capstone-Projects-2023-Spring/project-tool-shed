const yup = require('yup');

const loginUserSchema = yup.object({
	email: yup.string().email().trim().required(),
	password: yup.string().required(),
	redirectURI: yup.string().nullable(true).default(null).transform((_, v) => v === '' ? null : v).url()
});

module.exports = loginUserSchema;
