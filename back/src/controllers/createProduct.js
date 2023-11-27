const productSchema = require('../models/products')

const createProduct = async (req, res) => {
  const { name, description, price } = req.body
  try {
    const newProduct = new productSchema({
      name,
      description,
      price
    })
    const productSaved = await newProduct.save()
    res.json({
      id: productSaved._id,
      name: productSaved.name,
      description: productSaved.description,
      price: productSaved.price,
      
      createdAt: productSaved.createdAt
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createProduct
}
