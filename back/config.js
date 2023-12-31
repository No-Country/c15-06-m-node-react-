const dotenv = require('dotenv')

dotenv.config()

const TOKEN_SECRET = 'some secret key'
const STRIPE_KEY = process.env.STRIPE_KEY

module.exports = { TOKEN_SECRET, STRIPE_KEY }
