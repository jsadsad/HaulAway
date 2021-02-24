const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSchema = new Schema ({
    jobPoster: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    jobTakers: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    description: {
        type: String,
        required: true,
    },
    pickup: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    jobDifficulty: {
        type: String,
        required: true,
    },
    pictures: {
        data: Buffer,
        contentType: String,
    },
    jobType: {
        type: String,
        required: true,
    },
    jobStartDate: {
        type: String,
        required: true,
    },
    jobEndDate: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = Job = mongoose.model('jobs', JobSchema);