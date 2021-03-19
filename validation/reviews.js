const Validator = require('validator')
const validText = require('./valid-text')

module.exports = function validateReviewsInput(data) {
  let errors = {}

  data.title = validText(data.title) ? data.title : ''
  data.body = validText(data.body) ? data.body : ''
  
  if (Validator.isEmpty(data.rating)) {
    errors.rating = 'Rating is required'
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title is required'
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = 'Body is required'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};