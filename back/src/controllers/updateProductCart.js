const cartSchema = require('../models/cart')

const updateProductCart = async (req, res) => {
  const { id } = req.params
  const { query } = req.query
  const { amount } = req.body

  try {
    console.log('Buscando producto en el carrito...')
    const productInCart = await cartSchema.findById(id)

    if (!productInCart) {
      console.log('Producto no encontrado en el carrito.')
      console.log('Id del producto', id)
      return res.status(404).json({ mensaje: 'Producto no encontrado en el carrito' })
    }

    // Ajuste en la lógica de actualización del producto
    if (query === 'add') {
      productInCart.amount = productInCart.amount + amount
    } else if (query === 'del') {
      productInCart.amount = productInCart.amount - amount
    }

    // Guardar los cambios en la base de datos
    await productInCart.save()

    console.log('Producto actualizado:', productInCart)
    res.json({
      mensaje: `El producto ${productInCart.name} fue actualizado`,
      product: productInCart
    })
  } catch (error) {
    console.error('Error en la actualización del producto:', error)
    res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}

module.exports = {
  updateProductCart
}
