const productSchema = require('../models/products')

const getProductsByCategory = async (req, res) => {
  try {
    const { categoria } = req.params
    const products = await productSchema.find({ categoria })

    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getProductsByCategory
}
