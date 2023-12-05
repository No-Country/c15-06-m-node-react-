const jwt = require('jsonwebtoken')
const { TOKEN_SECRET } = require('../../config.js')

const authRequired = (req, res, next) => {
  const { token } = req.cookies

  if (!token) return res.status(401).json({ message: 'Autorización denegada' })

  jwt.verify(token, TOKEN_SECRET, (err, decodedToken) => {
    if (err) return res.status(403).json({ message: 'Token inválido' })

    req.user = {
      id: decodedToken.id,
      role: decodedToken.role
    }

    console.log('Usuario:', req.user)

    next()
  })
}

module.exports = { authRequired }
