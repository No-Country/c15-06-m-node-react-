const mongoose = require('mongoose')
const { type } = require('os')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  caracteristica: {
    type: String,
    required: false
  },
  categoria: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  id: {
    type: String,
    unique: false
  },
  imageUrl: {
    type: Array(type.String)
  }

}, {
  timestamps: true
})

module.exports = mongoose.model('Product', productSchema)
