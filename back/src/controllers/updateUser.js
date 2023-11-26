const userSchema = require('../models/user')

const updateUser = (req, res) => {
  const { id } = req.params
  const { name, email, password } = req.body
  userSchema
    .updateOne({ _id: id }, { $set: { name, email, password } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
}

module.exports = {
  updateUser
}
