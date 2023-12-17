const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const userRoute = require('./src/routes/routes')

const app = express()
dotenv.config()
app.use(morgan('dev'))

const port = process.env.PORT || 4000

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://main--ecovidastore1.netlify.app'
  ],
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

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
