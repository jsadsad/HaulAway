const Validator = require('validator')
const validText = require('./valid-text')

module.exports = function validateJob(data) {
  let errors = {}

  data.description = validText(data.description) ? data.description : ''
  data.pickup = validText(data.pickup) ? data.pickup : ''
  data.destination = validText(data.destination) ? data.destination : ''
  data.jobDifficulty = validText(data.jobDifficulty) ? data.jobDifficulty : ''
  data.jobType = validText(data.jobType) ? data.jobType : ''
  data.jobStartDate = validText(data.jobStartDate) ? data.jobStartDate : ''
  data.jobEndDate = validText(data.jobEndDate) ? data.jobEndDate : ''

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description is required'
  }

  if (!Validator.isLength(data.description, { min: 20 })) {
    errors.description = 'Description must be at least 20 characters'
  }

  if (Validator.isEmpty(data.pickup)) {
    errors.pickup = 'Pickup point is required'
  }

  if (Validator.isEmpty(data.destination)) {
    errors.destination = 'Destination is required'
  }

  if (Validator.isEmpty(data.jobType)) {
    errors.jobType = 'Job type is required'
  }

  if (Validator.isEmpty(data.jobDifficulty)) {
    errors.jobDifficulty = 'Job difficulty is required'
  }

  if (Validator.isEmpty(data.jobStartDate)) {
    errors.jobStartDate = 'Start date is required'
  }

  if (Validator.isEmpty(data.jobEndDate)) {
    errors.jobEndDate = 'End is required'
  }

  if (data.pictures.length < 1) {
    errors.pictures = 'Pictures are required'
  }

  return { errors, isValid: Object.keys(errors).length === 0 }
}
