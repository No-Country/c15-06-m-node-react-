const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const userRoute = require('./src/routes/routes')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const findOrCreate = require('mongoose-findorcreate')
const passportLocalMongoose = require('passport-local-mongoose')
const passport = require('passport')
const session = require('express-session')

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

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// inicializamos passport
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/api', userRoute)
app.use('/register', userRoute)
app.use('/login', userRoute)

// Google Auth
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }
  ))

app.route('/auth/google/api/product') // cambiar
  .get(passport.authenticate('google', { failureRedirect: '/login' }), // cambiar
    function (req, res) {
      res.redirect('/register') // cambiar
    })

app.get('/', (req, res) => {
  res.send('BACKEND ECO VIDA STORE')
})

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error(error))

// User Schema
const Schema = mongoose.Schema
const usuarioGoogleSchema = new Schema({
  email: String,
  password: String,
  googleId: String,
  secreto: String
})

// hash and salt
usuarioGoogleSchema.plugin(passportLocalMongoose)

// agregamos findOrCreate al schema
usuarioGoogleSchema.plugin(findOrCreate)

const UsuarioGoogle = mongoose.model('UsuarioGoogle', usuarioGoogleSchema)
passport.use(UsuarioGoogle.createStrategy())

// serializar y deserializar
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id })
  })
})

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user)
  })
})

// Config Google Auth
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3001/auth/google/api/product' // cambiar
},
function (accessToken, refreshToken, profile, cb) {
  console.log(profile)
  UsuarioGoogle.findOrCreate({ googleId: profile.id }, { username: profile.displayName }, function (err, user) {
    return cb(err, user)
  })
}))

app.listen(port, () => console.log('Server listening on port', port))
