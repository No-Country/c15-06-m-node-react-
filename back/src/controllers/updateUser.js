const userSchema = require('../models/user')

const updateUser = (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Acceso no autorizado, se requiere ser administrador' })
  }
  const { id } = req.params
  const { name, lastname, email, password, status } = req.body


  userSchema
    .updateOne({ _id: id }, { $set: { name, lastname, email, password, status } })
    .then((data) => {
      if (data.n === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' })
      }
      res.json(data)
    })
    .catch((error) => res.status(500).json({ message: error }))
}

module.exports = {
  updateUser
}
