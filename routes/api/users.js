const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const keys = require('../../config/keys')
const User = require('../../models/User')

const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

router.get('/test', (req, res) => res.json({ msg: 'This is the users route' }))

router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email,
    })
  }
)

router.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ nousersfound: 'No users found' }))
})

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) =>
      res.status(404).json({ nouserfound: 'No user found with that ID' })
    )
})

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({ email: req.body.email }).then((user) => {
    try {
      if (user) {
        errors.email = 'Email already exists'
        return res.status(400).json(errors)
      } else {
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          password: req.body.password,
          profilePic: req.body.profilePic,
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            newUser
              .save()
              .then((user) => {
                const payload = {
                  id: user.id,
                  email: user.email,
                  firstName: user.firstName,
                  lastName: user.lastName,
                }

                jwt.sign(
                  payload,
                  keys.secretOrKey,
                  { expiresIn: 7000 },
                  (err, token) => {
                    res.json({
                      success: true,
                      token: 'Bearer ' + token,
                    })
                  }
                )
              })
              .catch((err) => console.log(err))
          })
        })
      }
    } catch (e) {
      console.log(e)
      res.sendStatus(500)
    }
  })
})

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  const email = req.body.email
  const password = req.body.password

  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = 'This email does not exist'
      return res.status(400).json(errors)
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          profilePic: user.profilePic,
        }

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 7000 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
            })
          }
        )
      } else {
        errors.password = 'Incorrect password'
        return res.status(400).json(errors)
      }
    })
  })
})

router.patch('/:id', (req, res) => {
  const filter = { _id: req.params.id }
  const update = req.body

  User.findOneAndUpdate(filter, update, { new: true })
    .then((user) => {
      const updatedUser = {
        _id: user.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: user.email,
        password: user.password,
        phoneNumber: user.phoneNumber,
        profilePic: user.profilePic,
      }
      res.json(updatedUser)
    })
    .catch((error) => {
      res.status(404).json(error)
    })
})

router.delete(
  '/:user_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.deleteOne({ _id: req.params.job_id })
      .then((deletedUser) => res.json(deletedUser))
      .catch((err) => res.status(404).json({ noJobFound: 'No Job Found.' }))
  }
)

module.exports = router
