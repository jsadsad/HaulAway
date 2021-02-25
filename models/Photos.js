const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photoSchema = new Schema(
  {
    description: { type: String },
    fileLink: { type: String },
    s3_key: { type: String },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Photos', photoSchema)
