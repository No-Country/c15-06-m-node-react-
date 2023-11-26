const userSchema = require('../models/user')

const getUserById = (req, res) => {
  const { id } = req.params
  userSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({ message: error }))
}

module.exports = {
  getUserById
}
