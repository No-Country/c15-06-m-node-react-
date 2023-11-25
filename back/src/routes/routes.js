const express = require('express')
const userSchema = require('../models/user.js')
// const productSchema = require('../models/products')

const router = express.Router()

// create user
router.post('/users', (req, res) => {
  const user = userSchema(req.body)
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})
// get all users
router.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// get users por id
router.get('/users/:id', (req, res) => {
  const { id } = req.params
  userSchema
    .findbyId(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})
router.get('/product', (req, res) => {
  res.send('get product')
})

module.exports = router
