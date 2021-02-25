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
  reviewPoster: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
})

const Reviews = mongoose.model('reviews', ReviewSchema)
module.exports = Reviews
