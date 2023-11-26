const productSchema = require('../models/products')

const getAllProducts = (req, res) => {
  productSchema.find().then((data) => res.json(data)).catch((error) => res.json({ message: error }))
}

module.exports = {
  getAllProducts
}
