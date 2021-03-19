const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const passport = require('passport')

const Reviews = require('../../models/Reviews')
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

router.get('/:id', (req, res) => {
  Reviews.findById(req.params.id)
    .then((review) => {
      res.json(review)
    })
    .catch((error) => {
      res.status(400).json({ noReviewsFound: 'Review not found' })
    })
})

router.post(
  '/',
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
      jobId: req.body.jobId
    })

    newReview.save().then((review) => res.json(review))
  }
)

router.patch('/:id', (req, res) => {
  const filter = { _id: req.params.id }
  const update = req.body

  if (!isValid) {
      return res.status(400).json(errors)
  }
  
  Reviews.findOneAndUpdate(filter, update, { new: true })
    .then((review) => {
      const updatedReview = {
        id: review.id,
        title: review.title,
        body: review.body,
        rating: review.rating,
        date: Date.now,
        author: review.author,
        job: review.job
      }
      res.json(updatedReview)
    })
    .catch((error) => {
      res.status(404).json(error)
    })
})

router.delete(
  '/:review_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Reviews.deleteOne({ _id: req.params.review_id })
      .then((deletedReview) => res.json(deletedReview))
      .catch((error) => res.status(404).json({ noReviewFound: 'No Review Found.' }))
  }
)

module.exports = router
