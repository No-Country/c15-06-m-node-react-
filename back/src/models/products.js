const mongoose = require('mongoose')

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
    type: [String],
    required: true
  },
  status: {
    type: String,
    default: 'active'
  },
  inCart: {
    type: Boolean,
    default: false
  }

}, {
  timestamps: true
})

module.exports = mongoose.model('Product', productSchema)
