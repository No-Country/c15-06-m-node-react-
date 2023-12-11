const userSchema = require('../models/user.js')

const deleteUser = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Acceso no autorizado, se requiere ser administrador' })
  }
  
  const { id } = req.params

  try {
    // Buscar y eliminar el usuario por su ID
    const deletedUser = await userSchema.findByIdAndDelete(id)

    if (deletedUser) {
      const { name, lastname, status } = deletedUser

      return res.json({
        mensaje: 'Usuario eliminado correctamente',
        user: { name, lastname, status }
      })
    } else {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' })
    }
  } catch (error) {
    console.error('Error al eliminar el usuario:', error)
    return res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}

module.exports = {
  deleteUser
}
