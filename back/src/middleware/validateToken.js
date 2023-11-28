const jwt = require('jsonwebtoken')
const { TOKEN_SECRET } = require('../../config.js')
const authRequired = (req, res, next) => {
  const { token } = req.cookies

  if (!token) return res.status(401).json({ message: 'autorizacion denegada' })
  console.log(token)

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'invalid token' })
    req.user = user

    console.log(user)

    next()
  })
}

module.exports = { authRequired }
