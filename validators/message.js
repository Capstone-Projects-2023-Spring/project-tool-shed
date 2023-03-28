const yup = require('yup');

const messageSchema = yup.object({
	content: yup.string().required()
});

module.exports = messageSchema;
