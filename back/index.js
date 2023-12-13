const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const userRoute = require('./src/routes/routes')

const app = express()
const port = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api', userRoute)

app.get('/', (req, res) => {
  res.send('BACKEND ECO VIDA STORE')
})

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error(error))

app.listen(port, () => console.log('Server listening on port', port))
