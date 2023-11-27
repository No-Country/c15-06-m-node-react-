const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const userRoute = require('./src/routes/routes')

const app = express()
const port = process.env.PORT || 3001

// moddleware
app.use(express.json())
app.use('/api', userRoute)

// routes

app.get('/', (req, res) => {
  res.send('BACKEND ECO VIDA STORE')
})

// mongodb connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.log(error))
app.listen(port, () => console.log('server listening on port', port))
