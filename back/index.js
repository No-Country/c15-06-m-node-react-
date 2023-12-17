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
