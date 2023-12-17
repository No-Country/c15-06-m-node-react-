const cartSchema = require('../models/cart')
const productSchema = require('../models/products')

const addProductCart = async (req, res) => {
  const { name, imageUrl, price, description } = req.body

  try {
    const siProduct = await productSchema.findOne({ name })
    const infoProduct = name !== '' && imageUrl !== '' && price !== ''
    const productCarrito = await cartSchema.findOne({ name })

    if (!siProduct) {
      return res.status(400).json({
        mensaje: 'Este producto no está en la base de datos'
      })
    } else if (infoProduct && !productCarrito) {
      const newProductInCart = new cartSchema({
        name,
        imageUrl,
        price,
        description,
        amount: 1
      })

      await productSchema.findByIdAndUpdate(
        siProduct?._id,
        { inCart: true, name, imageUrl, price },
        { new: true }
      )

      await newProductInCart.save()

      return res.json({
        mensaje: 'El producto fue agregado al carrito',
        newProductInCart
      })
    } else {
      return res.status(400).json({
        mensaje: 'Este producto ya está en el carrito'
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      mensaje: 'Error interno del servidor'
    })
  }
}

module.exports = {
  addProductCart
}
