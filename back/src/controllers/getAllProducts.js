const productSchema = require('../models/products')

const getAllProducts = async (req, res) => {
  try {
    // Paginación
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 5

    // Filtrado
    const search = req.query.search
    const category = req.query.category
    const priceMin = parseFloat(req.query.priceMin)
    const priceMax = parseFloat(req.query.priceMax)

    // Parámetro de filtro y orden
    const sortBy = req.query.sortBy || 'name'
    const sortOrder = req.query.sortOrder || 'asc'

    // Construir el objeto de filtro
    const filter = {}

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { categoria: { $regex: search, $options: 'i' } }
      ]
    }

    if (category) {
      // Filtrar por categoría (en minúsculas para ser insensible a mayúsculas)
      const categoriaLower = category.toLowerCase()
      filter.category = categoriaLower
    }

    if (!isNaN(priceMin)) {
      filter.price = { $gte: priceMin }
    }

    if (!isNaN(priceMax)) {
      filter.price = { ...filter.price, $lte: priceMax }
    }

    // Consultar la base de datos con paginación, filtro y orden
    const products = await productSchema
      .find(filter)
      .sort({ [sortBy]: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit)

    // Obtener el total de productos sin paginación

    const totalProducts = await productSchema.countDocuments(filter)

    res.json({
      products,
      page,
      totalPages: Math.ceil(totalProducts / limit)
    })
  } catch (error) {
    console.error('error en la consulta', error)
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAllProducts
}
