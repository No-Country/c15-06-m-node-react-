const cartSchema = require('../models/cart')
const Stripe = require('stripe')
const stripe = new Stripe('sk_test_51ONcxIGO4f8HyMvamqNDAdRA4ss3JgwKN1AkTguOkduLixjka5UzLjfe7tomFJFUGo2uU7mNhTN58KHkZBFA9sfE00ZBrLfb2z')

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
      success_url: 'http://localhost:3001/api/success',
      cancel_url: 'http://localhost:3001/api/cancel'
    })

    return res.json({ session })
  } catch (error) {
    console.error('Error al crear la sesión de pago:', error)
    return res.status(500).json({ error: 'Error interno del servidor' })
  }
}

module.exports = { createOrder }
