const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const passport = require('passport')

const Reviews = require('../../models/Reviews')
const reviews = require('../../validation/reviews')
const validateReviewsInput = require('../../validation/reviews')

router.get('/test', (req, res) => {
  res.json({ msg: 'this is reviews route' })
})

router.get('/', (req, res) => {
  Reviews.find()
    .sort({ date: -1 }) // order newest first
    .then((reviews) => res.json(reviews))
    .catch((err) =>
      res.status(404).json({ noReviewsFound: 'No reviews found' })
    )
})

router.post(
  '/new',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateReviewsInput(req.body)

    if (!isValid) {
      return res.status(400).json(errors)
    }

    const newReview = new Reviews({
      title: req.body.title,
      body: req.body.body,
      rating: req.body.rating,
      date: req.body.date,
      author: req.user._id,
    })

    newReview.save().then((review) => res.json(review))
  }
)

module.exports = router
