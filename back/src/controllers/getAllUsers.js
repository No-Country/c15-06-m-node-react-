const userSchema = require('../models/user')

const getAllUsers = (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Acceso no autorizado, se requiere ser administrador' })
  }

  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ error: error.message }))
}

module.exports = {
  getAllUsers
}
