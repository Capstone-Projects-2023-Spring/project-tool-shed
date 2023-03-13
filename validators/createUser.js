const yup = require('yup');

const _nullStr = yup.string().nullable(true).default(null).trim().transform((_, v) => v === '' ? null : v);

const createUserSchema = yup.object({
	first_name: _nullStr.required(),
	last_name: _nullStr.required(),
	email: _nullStr.email().required(),
	password: _nullStr.required(),
	redirectURI: _nullStr.url(),
	line_one: _nullStr.required(),
	line_two: _nullStr,
	city: _nullStr.required(),
	state: yup().string().matches(/^[A-Za-z]{2}$/, 'Must be a valid state (e.g. NJ)').required(),
	zip_code: yup().string().matches(/^[0-9]{5}$/, 'Must be exactly 5 digits').required()
});

module.exports = createUserSchema;
