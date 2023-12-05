const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  status: {
    type: String,
    default: 'active'
  },
  id: {
    type: String,
    required: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)
