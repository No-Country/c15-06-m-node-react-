const userSchema = require('../models/user')
const bcrypt = require('bcryptjs')
const { createAccessToken } = require('../libs/jwt')
const { TOKEN_SECRET } = require('../../config.js')

const register = async (req, res) => {
  const { email, password, name, lastname, role } = req.body

  // Validaciones
  const emailRegex = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/

  const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/ // Mínimo 8 caracteres, al menos una letra en mayúscula y un número

  if (!password || !passwordRegex.test(password)) {
    return res.status(400).json({ error: 'Contraseña inválida. Debe contener al menos 8 caracteres, una letra en mayúscula y un número.' })
  }
  // Mínimo 8 caracteres, al menos una letra y un número

  if (!name || !/^[a-zA-Z]+$/.test(name) || name.length > 20) {
    return res.status(400).json({ error: 'Nombre inválido. No debe estar vacio y contener solo letras.' })
  }

  if (lastname && (lastname.length > 20 || !/^[a-zA-Z]+$/.test(lastname))) {
    return res.status(400).json({ error: 'Apellido inválido. No debe estar vacio y contener solo letras.' })
  }

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Correo electrónico inválido.' })
  }

  if (!password || !passwordRegex.test(password)) {
    return res.status(400).json({ error: 'Contraseña inválida. Debe contener al menos 8 caracteres, una letra y un número.' })
  }

  try {
    const userExists = await userSchema.findOne({ email })

    if (userExists) {
      return res.status(400).json({ error: 'El correo electrónico ya está registrado.' })
    }

    const passwordHash = await bcrypt.hash(password, 10)
    const newUser = new userSchema({
      name,
      lastname,
      email,
      password: passwordHash,
      role: role || 'user',
      status: 'active'
    })

    const userSaved = await newUser.save()
    const token = await createAccessToken({ id: userSaved._id, role: userSaved.role }, TOKEN_SECRET, { expiresIn: '1h' })

    res.cookie('token', token)

    res.json({
      id: userSaved._id,
      username: userSaved.name,
      lastname: userSaved.lastname,
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

    res.cookie('token', token, { sameSite: 'none', secure: true })

    res.json({
      id: userFound._id,
      username: userFound.name,
      lastname: userFound.lastname,
      email: userFound.email,
      token,
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
    lastname: userFound.lastname,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt
  })
}

module.exports = {
  register, login, logout, profile
}
