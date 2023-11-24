const express = require ('express')
const userSchema = require ('../models/user.js')

const router = express.Router()

//create user   
router.post('/users', (req, res) => {
    res.send('create user')
})

router.get('/product', (req, res) =>{
    res.send('get product')
})

module.exports = router