const cartSchema = require('../models/cart')
const productSchema = require('../models/products')
const ongSchema = require('../models/ong')

const addProductCart = async (req, res) => {
  const { name, imageUrl, price, description, category } = req.body

  try {
    // Verifica si el producto existe en la base de datos de productos
    const existingProduct = await productSchema.findOne({ name })

    // Verifica si la ONG existe en la base de datos de ONGs
    const existingOng = await ongSchema.findOne({ name })

    // Verifica si el producto ya está en el carrito
    const productInCart = await cartSchema.findOne({ name })

    if (!existingProduct && !existingOng) {
      return res.status(400).json({
        mensaje: 'Este producto/ONG no está en la base de datos'
      })
    } else if ((existingProduct || existingOng) && !productInCart) {
      const newCartItem = new cartSchema({
        name,
        imageUrl,
        price,
        description,
        amount: 1,
        category // Agrega la categoría al carrito
      })

      // Actualiza el estado "inCart" en la base de datos de productos u ONGs
      if (existingProduct) {
        await productSchema.findByIdAndUpdate(existingProduct?._id, { inCart: true })
      } else {
        await ongSchema.findByIdAndUpdate(existingOng?._id, { inCart: true })
      }

      // Guarda el nuevo artículo en el carrito
      await newCartItem.save()

      return res.json({
        mensaje: 'El producto/ONG fue agregado al carrito',
        newCartItem
      })
    } else {
      return res.status(400).json({
        mensaje: 'Este producto/ONG ya está en el carrito'
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

/* const cartSchema = require('../models/cart')
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
 */
