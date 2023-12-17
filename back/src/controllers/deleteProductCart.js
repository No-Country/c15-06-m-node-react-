const cartSchema = require('../models/cart.js')
const productSchema = require('../models/products.js')

const deleteProductCart = async (req, res) => {
  const { id } = req.params

  try {
    console.log('Buscando producto en el carrito...')
    const productInCart = await cartSchema.findById(id)

    if (!productInCart) {
      console.log('Producto no encontrado en el carrito.')
      console.log('Id del producto', id)
      return res.status(404).json({ mensaje: 'Producto no encontrado en el carrito' })
    }

    const { name, imageUrl, price, _id } = await productSchema.findOne({ name: productInCart.name })

    await cartSchema.findByIdAndDelete(id)

    await productSchema.findByIdAndUpdate(
      _id,
      { inCart: false, name, imageUrl, price },
      { new: true }
    )

    console.log('Producto eliminado del carrito:', productInCart)
    res.json({
      mensaje: `El producto ${productInCart.name} fue eliminado del carrito`
    })
  } catch (error) {
    console.error('Error al eliminar el producto:', error)
    res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}

module.exports = {
  deleteProductCart
}
