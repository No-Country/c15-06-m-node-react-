const productSchema = require('../models/products')

const getProductById = (req, res) => {
  const { id } = req.params
  productSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
}

module.exports = {
  getProductById
}
