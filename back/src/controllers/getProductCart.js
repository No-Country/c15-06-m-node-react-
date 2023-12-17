const cartSchema = require('../models/cart')

const getProductCart = async (req, res) => {
  const productCart = await cartSchema.find()

  if (productCart && productCart.length > 0) {
    res.json({ productCart })
  } else {
    res.json({ mensaje: 'No hay productos en el carrito' })
  }
}

module.exports = {
  getProductCart
}
