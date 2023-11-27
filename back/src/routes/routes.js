const express = require('express')
// const Router = require('express')
const { createUser } = require('../controllers/createUser')
const { updateUser } = require('../controllers/updateUser.js')
const { getUserById } = require('../controllers/getUserById.js')
const { getAllProducts } = require('../controllers/getAllProducts.js')
const { getAllUsers } = require('../controllers/getAllUsers.js')
const { getProductById } = require('../controllers/getProductById.js')
const { createProduct } = require('../controllers/createProduct')
const { updateProduct } = require('../controllers/updateProduct.js')
const { login, register, logout } = require('../controllers/auth.js')
const router = express.Router()

// Rutas usuarios
router.post('/users', createUser)
router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.put('/users/:id', updateUser)
// rutas productos
router.post('/product', createProduct)
router.get('/product', getAllProducts)
router.get('/product/:id', getProductById)
router.put('/product/:id', updateProduct)
//session
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

module.exports = router
