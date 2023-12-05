const userSchema = require('../models/user')

const createUser = async (req, res) => {
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

    const newUser = new userSchema({
      name,
      email,
      password,
      role: role || 'user',
      status: 'active'
    })

    const userSaved = await newUser.save()

    res.json({
      id: userSaved._id,
      username: userSaved.name,
      email: userSaved.email,
      status: userSaved.status,
      createdAt: userSaved.createdAt
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error al crear el usuario.' })
  }
}

module.exports = {
  createUser
}
