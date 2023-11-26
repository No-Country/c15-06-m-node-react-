const productSchema = require('../models/products')

const createProduct = (req, res) => {
  const product = productSchema(req.body)
  product.save().then((data) => res.json(data)).catch((error) => res.json({ message: error }))
}

module.exports = {
  createProduct
}
