const yup = require('yup');

const searchListingsSchema = yup.object({
	searchQuery: yup.string().nullable(true).default(null).transform((_, v) => v === '' ? null : v),
	userLat: yup.number().min(-90).max(90), // where the user is located (lat)
	userLon: yup.number().min(-180).max(180), // where the user is located (lon)
	useUserAddress: yup.boolean().default(false), // whether or not to use the authenticated user's address instead their frontend's location
	searchRadius: yup.number().positive().required(), // kilometers
});

module.exports = searchListingsSchema;
