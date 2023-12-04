const dashboardAdmin = async (req, res) => {
  try {
    // Verificar si el usuario tiene el rol de administrador
    const { role } = req.user // Suponiendo que req.user contiene la información del usuario

    if (role !== 'admin') {
      return res.status(403).send('Acceso denegado. Se requiere rol de administrador.')
    }

    res.send('Estoy en el dashboard de administrador')
  } catch (error) {
    console.error(error)
    res.status(500).send('Error en el servidor')
  }
}

module.exports = {
  dashboardAdmin
}
