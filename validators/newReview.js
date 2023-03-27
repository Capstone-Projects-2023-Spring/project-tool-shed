const yup = require('yup');

const newReviewSchema = yup.object({
    content: yup.string().required(),
    reviewee_id: yup.number(),
    ratings: yup.number().min(0).max(5)
});

module.exports = newReviewSchema;
