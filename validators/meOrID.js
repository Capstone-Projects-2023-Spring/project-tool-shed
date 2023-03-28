const yup = require('yup');

const meOrID = yup.lazy(v => !isNaN(parseInt(v)) ? yup.number().positive() : yup.string().matches(/^me$/, 'String values must be "me"'));

module.exports = meOrID;
