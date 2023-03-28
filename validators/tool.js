const yup = require('yup');

const toolSchema = yup.object({
	name: yup.string(),
	description: yup.string(),
	tool_category_id: yup.number().positive(),
	tool_maker_id: yup.number().positive()
});

module.exports = toolSchema;
