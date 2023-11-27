const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
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
  imageUrl: {
    type: [String],
    required: true
  },
  id: {
    type: String,
    required: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)
