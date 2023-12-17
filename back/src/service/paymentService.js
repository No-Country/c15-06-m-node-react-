const axios = require('axios')

class PaymentService {
  async createPayment () {
    const url = 'https://api.mercadopago.com/checkout/preferences'

    const body = {
      payer_email: 'test_user_1662266079@testuser.com',
      items: [
        {
          title: 'dummy',
          description: 'Item description',
          picture_url: 'http_//www.myapp.com/myimage.jpg',
          category_id: 'cat123',
          quantity: 1,
          unit_price: 50
        }
      ],
      back_urls: {
        success: 'http://localhost:8080/success',
        failure: 'http://localhost:8080/success'
      },
      notification_url: 'https://subdominio.www.your-site.com'

    }

    const payment = await axios.post(url, body, {
      headers: {
        'content-Type': 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    })

    return payment
  }
}

module.exports = {PaymentService}
