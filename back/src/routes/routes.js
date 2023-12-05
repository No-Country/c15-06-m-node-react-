const express = require('express')
const { createUser } = require('../controllers/createUser')
const { updateUser } = require('../controllers/updateUser.js')
const { getUserById } = require('../controllers/getUserById.js')
const { getAllProducts } = require('../controllers/getAllProducts.js')
const { getProductsByCategory } = require('../controllers/getProductByCategory.js')
const { getAllUsers } = require('../controllers/getAllUsers.js')
const { getProductById } = require('../controllers/getProductById.js')
const { createProduct } = require('../controllers/createProduct')
const { updateProduct } = require('../controllers/updateProduct.js')
const { login, register, logout, profile } = require('../controllers/auth.js')
const { authRequired } = require('../middleware/validateToken.js')
const { dashboardAdmin } = require('../controllers/dashboardAdmin.js')
const router = express.Router()

// Rutas usuarios
router.post('/users', authRequired, createUser)
router.get('/users', authRequired, getAllUsers)
router.get('/users/:id', authRequired, getUserById)
router.put('/users/:id', authRequired, updateUser)
// rutas productos
router.post('/product', authRequired, createProduct)
router.get('/product', getAllProducts)
router.get('/product/category/:categoria', getProductsByCategory)
router.get('/product/:id', getProductById)
router.put('/product/:id', authRequired, updateProduct)
// session
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/profile', authRequired, profile)
// admin
router.get('/admin', authRequired, dashboardAdmin)

module.exports = router
