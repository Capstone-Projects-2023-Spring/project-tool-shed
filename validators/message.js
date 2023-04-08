const yup = require('yup');

const messageSchema = yup.object({
	content: yup.string().required(),
	listingId: yup.number().positive()
});

module.exports = messageSchema;
