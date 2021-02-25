const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  rating: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  userReviewed: {
    type: Schema.Types.JobPoster,
    ref: 'jobs'
  }
})

const Reviews = mongoose.model('reviews', ReviewSchema)
module.exports = Reviews
