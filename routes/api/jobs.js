const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const keys = require('../../config/keys')
const Jobs = require('../../models/Jobs')

const validateJob = require('../../validation/validate-job');

router.get('/test', (req, res) => res.json({ msg: 'This is the jobs route' }))


router.get(
    '/',
    (req, res) => {
        Jobs.find().sort({date: 1})
        .then((jobs) => {
            res.json(jobs)
        })
        .catch((error) => {
            res.status(400)
            .json({noJobsFound: 'Jobs not found'})
            
        }) 
    }
)

router.get(
    '/user/:user_id',
    (req, res) => {
        Jobs.find({user: req.params.user_id})
        .then((jobs) => {
            res.json(jobs)
        })
        .catch((error) => {
            res.status(400)
            .json({noJobsFound: 'Jobs not found'})  
        }) 
    }

)

router.get(
    '/:id',
    (req, res) => {
        Jobs.findById(req.params.id)
        .then((job) => {
            res.json(job)
        })
        .catch((error) => {
            res.status(400)
            .json({noJobsFound: 'Job not found'})  
        })
    }
)

router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateJob(req.body)

        if (!isValid) {
            return res.status(400)
            .json(errors)
        }

        const newJob = new Job({ 
            description: req.body.description,
            pickup: req.body.pickup,
            destination: req.body.destination,
            jobDifficulty: req.body.jobDifficulty,
            jobType: req.body.jobType,
            jobStartDate: req.body.jobStartDate,
            jobEndDate: req.body.jobEndDate,
            jobPoster: req.user.id,
            jobTaker: req.user.id,
        })

        newJob.save()
        .then((job) => {
            res.json(job)
        })
    }
)

module.exports = router;

















