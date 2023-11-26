const userSchema = require('../models/user')

const getAllUsers = (req, res) => {
  userSchema.find().then((data) => res.json(data)).catch((error) => res.json({ message: error }))
}

module.exports = {
  getAllUsers
}
