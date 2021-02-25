const Validator = require('validator');

module.exports = function validateReviewsInput(data) {
  let errors = {};

  if (!Validator.isEmpty(data.rating)) {
    errors.rating = 'Field is required';
  }
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};