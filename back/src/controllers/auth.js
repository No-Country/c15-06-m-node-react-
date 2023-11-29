const userSchema = require('../models/user')
const bcrypt = require('bcryptjs')
const { createAccessToken } = require('../libs/jwt')

const register = async (req, res) => {
  const { email, password, name } = req.body

  try {
    const passwordHash = await bcrypt.hash(password, 10)// para encriptar la contraseña
    const newUser = new userSchema({
      name,
      email,
      password: passwordHash
    })
    const userSaved = await newUser.save()// aca se guarda el user
    const token = await createAccessToken({ id: userSaved._id })// aca se crea el token
    res.cookie('token', token)// aca el token se guarda en una cookie
    // devuelve la respuesta del usuario al front
    res.json({
      id: userSaved._id,
      username: userSaved.name,
      email: userSaved.email,
      createdAt: userSaved.createdAt
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const userFound = await userSchema.findOne({ email })

    if (!userFound) return res.status(400).json({ message: 'Usuario no encontrado' })

    const isMatch = await bcrypt.compare(password, userFound.password)// valida que el usuarrio exista

    if (!isMatch) return res.status(400).json({ message: 'incorrect password' })

    const token = await createAccessToken({ id: userFound._id })// aca se crea el token con el usuario encontrado

    res.cookie('token', token)// aca el token se guarda en una cookie
    // devuelve la respuesta del usuario al front
    res.json({
      id: userFound._id,
      username: userFound.name,
      email: userFound.email,
      createdAt: userFound.createdAt
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const logout = (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0)
  })
  return res.sendStatus(200)
}

const profile = async (req, res) => {
  const userFound = await userSchema.findById(req.user.id)

  if (!userFound) return res.status(400).json({ message: 'Usuario no encontrado' })

  return res.json({
    id: userFound._id,
    username: userFound.name,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt
  })
}

module.exports = {
  register, login, logout, profile
}
