const productSchema = require('../models/products')

const updateProduct = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Acceso no autorizado, se requiere ser administrador' })
  }

  const { id } = req.params
  const { name, description, price, status } = req.body
  try {
    const result = await productSchema.updateOne({ _id: id }, { $set: { name, description, price, status } })

    if (result.nModified === 1) {
      // Verificar si el status es 'inactive' y responder en consecuencia
      if (status === 'inactive') {
        return res.status(200).json({ message: 'El producto está en revisión' })
      }

      return res.status(200).json({ message: 'Producto actualizado correctamente' })
    } else {
      return res.status(404).json({ message: 'Producto no encontrado' })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = {
  updateProduct
}
