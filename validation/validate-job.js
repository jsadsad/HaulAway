const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateJob(data) {

    let errors = {}

    data.description = validText(data.description) ? data.description : '';
    data.pickup = validText(data.pickup) ? data.pickup : '';
    data.destination = validText(data.destination) ? data.destination : '';
    data.jobDifficulty = validText(data.jobDifficulty) ? data.jobDifficulty : '';
    data.jobType = validText(data.jobType) ? data.jobType : '';
    data.jobStartDate = validText(data.jobStartDate) ? data.jobStartDate : '';
    data.jobEndDate = validText(data.jobEndDate) ? data.jobEndDate : '';

    if (Validator.isEmpty(data.description)) {
        errors.description = 'Description is required';
    }

    if (!Validator.isLength(data.description, { min: 30 })) {
        errors.description = 'Description must be at least 10 characters';
    }

    if (Validator.isEmpty(data.pickup)) {
        errors.pickup = 'Pickup point is required';
    }

    if (Validator.isEmpty(data.destination)) {
        errors.destination = 'Destination is required';
    }

    if (Validator.isEmpty(data.jobType)) {
        errors.jobType = 'Job type is required';
    }

    if (Validator.isEmpty(data.jobStartDate)) {
        errors.jobStartDate = 'Start date is required';
    }

    if (Validator.isEmpty(data.jobEndDate)) {
        errors.jobEndDate = 'End is required';
    }

}

