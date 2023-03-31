const yup = require('yup');
const {billingIntervals} = require('../constants');

const listingSchema = yup.object({
	toolId: yup.number().integer().positive(),
	price: yup.number().positive(),
	maxBillingIntervals: yup.number().integer(),
	billingInterval: yup.string().oneOf(billingIntervals),
	active: yup.boolean()
});

module.exports = listingSchema;
