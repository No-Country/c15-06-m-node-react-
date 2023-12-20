const mongoose = require('mongoose')

const ongSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: [String],
    required: true
  },
  url: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true
  },
  inCart: {
    type: Boolean,
    default: false
  }

})

module.exports = mongoose.model('Ong', ongSchema)
