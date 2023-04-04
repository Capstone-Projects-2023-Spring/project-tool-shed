const yup = require('yup');

const toolSchema = yup.object({
	name: yup.string(),
	description: yup.string(),
	tool_category_id: yup.number().transform(x => isNaN(x) ? null : x).nullable(true).positive(),
	tool_maker_id: yup.number().transform(x => isNaN(x) ? null : x).nullable(true).positive()
});

module.exports = toolSchema;
