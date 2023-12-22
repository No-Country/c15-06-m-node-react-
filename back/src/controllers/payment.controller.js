const cartSchema = require('../models/cart')
const STRIPE_KEY = require('..//../config').STRIPE_KEY
const Stripe = require('stripe')
/* const stripe = new Stripe(STRIPE_KEY) */
console.log('CLAVE STRIPE:', STRIPE_KEY)
const stripe = new Stripe(STRIPE_KEY)

const createOrder = async (req, res) => {
  try {
    // Obtén los productos del carrito desde tu base de datos
    const cartItems = await cartSchema.find()

    // Crea la lista de productos para la sesión de pago
    const session = await stripe.checkout.sessions.create({
      line_items: cartItems.map(item => ({
        price_data: {
          product_data: {
            name: item.name,
            description: item.description
          },
          currency: 'usd',
          unit_amount: item.price * 100 // Convierte el precio a centavos

        },
        quantity: item.amount
      })),
      mode: 'payment',
      success_url: 'https://main--ecovidastore1.netlify.app/products',
      cancel_url: 'http://localhost:3001/api/cancel'
    })

    return res.json({ session })
  } catch (error) {
    console.error('Error al crear la sesión de pago:', error)
    return res.status(500).json({ error: 'Error interno del servidor' })
  }
}

module.exports = { createOrder }
