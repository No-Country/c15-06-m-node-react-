const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  id: {
    type: String,
    unique: true
  },
  price: {
    type: Number,
    required: true
  }

})

module.exports = mongoose.model('Product', ProductSchema)
