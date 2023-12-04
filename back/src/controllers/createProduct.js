const productSchema = require('../models/products')

const createProduct = async (req, res) => {
  console.log('Role del usuario:', req.user.role)
  if (req.user.role !== 'admin') {
    return res.status(404).json({ error: 'Acceso no autorizado, se requiere ser administrador' })
  }
  const { name, description, price, categoria, imageUrl, status } = req.body

  // Validaciones
  const nameRegex = /^[a-zA-Z]+$/
  const categoryRegex = /^[a-zA-Z]+$/
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/

  if (!name || !nameRegex.test(name) || name.length > 30) {
    return res.status(400).json({ error: 'Nombre inválido.' })
  }

  if (!description || !nameRegex.test(description) || description.length > 100) {
    return res.status(400).json({ error: 'Descripción inválida.' })
  }

  if (!categoria || !categoryRegex.test(categoria) || categoria.length > 30) {
    return res.status(400).json({ error: 'Categoría inválida.' })
  }

  if (!price || isNaN(price) || price < 0) {
    return res.status(400).json({ error: 'Precio inválido.' })
  }

  if (!imageUrl || !urlRegex.test(imageUrl)) {
    return res.status(400).json({ error: 'URL de imagen inválida.' })
  }

  try {
    const newProduct = new productSchema({
      name,
      description,
      price,
      categoria,
      imageUrl,
      status: 'active'
    })

    const productSaved = await newProduct.save()

    res.json({
      id: productSaved._id,
      name: productSaved.name,
      description: productSaved.description,
      price: productSaved.price,
      categoria: productSaved.categoria,
      imageUrl: productSaved.imageUrl,
      status: productSaved.status,
      createdAt: productSaved.createdAt
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error al crear el producto.' })
  }
}

module.exports = {
  createProduct
}
