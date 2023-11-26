const productSchema = require('../models/products')

const createProduct = (req, res) => {
  const product = productSchema(req.body)
  product.save().then((data) => res.json(data)).catch((error) => res.json({ message: error }))
}

module.exports = {
  createProduct
}

// productController.js

/* const Product = require('../models/products') // Ajusta la ruta según tu estructura de proyecto

const createProduct = (req, res) => {
  const product = new Product(req.body) // Utiliza 'new' para instanciar un objeto basado en el esquema
  product.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
}

module.exports = {
  createProduct
}
 */
