const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  imageUrl: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }

}, {
  timestamps: true
})

module.exports = mongoose.model('Cart', cartSchema)
