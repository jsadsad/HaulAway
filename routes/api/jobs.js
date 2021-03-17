const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')
const Jobs = require('../../models/Jobs')

const validateJob = require('../../validation/validate-job')
mongoose.set('useFindAndModify', false)

router.get('/', (req, res) => {
  Jobs.find()
    .populate('jobPoster')
    .sort({ date: 1 })
    .then((jobs) => {
      res.json(jobs)
    })
    .catch((error) => {
      res.status(400).json({ noJobsFound: 'Jobs not found' })
    })
})

router.get('/:id', (req, res) => {
  Jobs.findById(req.params.id)
    .populate('jobPoster')
    .then((job) => {
      res.json(job)
    })
    .catch((error) => {
      res.status(400).json({ noJobsFound: 'Job not found' })
    })
})

router.get('/user/:poster_id', (req, res) => {
  Jobs.find({ jobPoster: req.params.poster_id })
    .then((jobs) => {
      res.json(jobs)
    })
    .catch((error) => {
      res.status(400).json({ noJobsFound: 'Jobs not found' })
    })
})

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateJob(req.body)

    if (!isValid) {
      return res.status(400).json(errors)
    }

    const newJob = new Job({
      jobPoster: req.user.id,
      description: req.body.description,
      pickup: req.body.pickup,
      destination: req.body.destination,
      distance: req.body.distance,
      jobDifficulty: req.body.jobDifficulty,
      jobType: req.body.jobType,
      jobStartDate: req.body.jobStartDate,
      jobEndDate: req.body.jobEndDate,
      pictures: req.body.pictures,
    })
    newJob.save().then((job) => {
      res.json(job)
    })
  }
)

router.patch('/:id', (req, res) => {
  const filter = { _id: req.params.id }
  const update = req.body

  Job.findOneAndUpdate(filter, update, { new: true })
    .then((job) => {
      const updatedJob = {
        _id: job.id,
        description: job.description,
        pickup: job.pickup,
        destination: job.destination,
        jobDifficulty: job.jobDifficulty,
        jobType: job.jobType,
        jobStartDate: job.jobStartDate,
        jobEndDate: job.jobEndDate,
        pictures: job.pictures,
        jobTaker: job.jobTaker,
        isAvailable: job.isAvailable,
        isClosed: job.isClosed,
        isReviewed: job.isReviewed,
      }
      res.json(updatedJob)
    })
    .catch((error) => {
      res.status(404).json(error)
    })
})

router.delete(
  '/:job_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Job.deleteOne({ _id: req.params.job_id })
      .then((deletedJob) => res.json(deletedJob))
      .catch((error) => res.status(404).json({ noJobFound: 'No Job Found.' }))
  }
)

module.exports = router
