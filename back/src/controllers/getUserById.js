const userSchema = require('../models/user')

const getUserById = (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Acceso no autorizado, se requiere ser administrador' })
  }
  const { id } = req.params
  userSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
}

module.exports = {
  getUserById
}
