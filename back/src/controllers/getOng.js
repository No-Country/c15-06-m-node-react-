const ongSchema = require('../models/ong')

const getOngs = async (req, res) => {
  try {
    const ongs = await ongSchema.find()

    res.json(ongs)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getOngs
}
