const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSchema = new Schema({
  jobPoster: {
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
  distance: {
    type: Number,
    required: true,
  },
  jobDifficulty: {
    type: String,
    required: true,
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
    default: Date.now,
  },
  pictures: {
    type: Array,
    required: false,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  jobTaker: {
    type: String,
    default: '',
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  isClosed: {
    type: Boolean,
    default: false,
  },
  isReviewed: {
    type: Boolean,
    default: false,
  },
})

module.exports = Job = mongoose.model('jobs', JobSchema)
