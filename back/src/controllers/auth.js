const userSchema = require('../models/user')
const bcrypt = require('bcryptjs')
const { createAccessToken } = require('../libs/jwt')
const { TOKEN_SECRET } = require('../../config.js')

const register = async (req, res) => {
  const { email, password, name, role } = req.body

  // Validaciones
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ // Mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula y un número

  if (!name || name.length > 30 || !/^[a-zA-Z]+$/.test(name)) {
    return res.status(400).json({ error: 'Nombre inválido.' })
  }

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Correo electrónico inválido.' })
  }

  if (!password || !passwordRegex.test(password)) {
    return res.status(400).json({ error: 'Contraseña inválida. Debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.' })
  }

  try {
    const userExists = await userSchema.findOne({ email })

    if (userExists) {
      return res.status(400).json({ error: 'El correo electrónico ya está registrado.' })
    }

    const passwordHash = await bcrypt.hash(password, 10)
    const newUser = new userSchema({
      name,
      email,
      password: passwordHash,
      role: role || 'user',
      status: 'active'
    })

    const userSaved = await newUser.save()
    const token = await createAccessToken({ id: userSaved._id, role: userSaved.role }, TOKEN_SECRET, { expiresIn: '1h' })
    console.log('usuario salvado', userSaved)
    console.log('Token generado:', token)

    res.cookie('token', token)

    res.json({
      id: userSaved._id,
      username: userSaved.name,
      email: userSaved.email,
      status: userSaved.status,
      createdAt: userSaved.createdAt
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error al registrar el usuario.' })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const userFound = await userSchema.findOne({ email })

    if (!userFound) return res.status(400).json({ message: 'Usuario no encontrado' })

    // Verificar el estado del usuario
    if (userFound.status === 'inactive') {
      return res.status(401).json({ message: 'Su cuenta ha sido desactivada. Comuníquese con soporte. mailsoporte@.com' })
    }

    const isMatch = await bcrypt.compare(password, userFound.password)

    if (!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta' })

    const token = await createAccessToken({ id: userFound._id, role: userFound.role }, TOKEN_SECRET, { expiresIn: '1h' })

    res.cookie('token', token)

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
