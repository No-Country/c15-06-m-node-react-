const productSchema = require('../models/products')

const deleteProduct = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Acceso no autorizado, se requiere ser administrador' })
  }

  const { id } = req.params

  try {
    const deletedProduct = await productSchema.findByIdAndDelete(id)

    if (deletedProduct) {
      const { name, description, price, imageUrl, category } = deletedProduct

      return res.json({
        mensaje: 'Producto eliminado correctamente',
        prduct: { name, description, price, imageUrl, category }
      })
    } else {
      return res.status(404).json({ mensaje: 'Producto no encontrado' })
    }
  } catch (error) {
    console.error('Error al eliminar el producto:', error)
    return res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}

module.exports = {
  deleteProduct
}
