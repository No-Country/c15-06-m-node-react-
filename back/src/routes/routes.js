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
const { getProductCart } = require('../controllers/getProductCart.js')
const { addProductCart } = require('../controllers/addProductCart.js')
const { updateProductCart } = require('../controllers/updateProductCart.js')
const { deleteProductCart } = require('../controllers/deleteProductCart.js')
const { deleteUser } = require('../controllers/deleteUser.js')
const { deleteProduct } = require('../controllers/deleteProduct.js')
const { createOrder } = require('../controllers/payment.controller.js')
const { getPaymentSuccess } = require('../controllers/getPaymentSuccess.js')
const { getPaymentCancel } = require('../controllers/getPaymentCancel.js')

const router = express.Router()

// Rutas usuarios
router.post('/users', authRequired, createUser)
router.get('/users', authRequired, getAllUsers)
router.get('/users/:id', authRequired, getUserById)
router.put('/users/:id', authRequired, updateUser)
router.delete('/users/:id', authRequired, deleteUser)
// rutas productos
router.post('/product', authRequired, createProduct)
router.get('/product', getAllProducts)
router.get('/product/category/:categoria', getProductsByCategory)
router.get('/product/:id', getProductById)
router.put('/product/:id', authRequired, updateProduct)
router.delete('/product/:id', authRequired, deleteProduct)
// session
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/profile', authRequired, profile)
// admin
router.get('/admin', authRequired, dashboardAdmin)
// carrito de compras
router.get('/cart', getProductCart)
router.post('/cartproduct', authRequired, addProductCart)
router.put('/cartproduct/:id', authRequired, updateProductCart)
router.delete('/cartproduct/:id', authRequired, deleteProductCart)

/* // pay
router.get('/payment', function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res)
}) */

router.post('/create-order', createOrder)
router.get('/success', getPaymentSuccess)
router.get('/cancel', getPaymentCancel)

module.exports = router
