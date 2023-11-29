const productSchema = require('../models/products')

const updateProduct = (req, res) => {
  const { id } = req.params
  const { name, description, price } = req.body
  productSchema
    .updateOne({ _id: id }, { $set: { name, description, price } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
}

module.exports = {
  updateProduct
}
