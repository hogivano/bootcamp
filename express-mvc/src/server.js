const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('express-flash')
const bodyParser = require('body-parser')
const logging = require('./utils/logging')
const helmet = require('helmet')
const routesAPI = require('./routes/api')
const routesView = require('./routes/view')
const errorController = require('./controllers/error.controller')

const PORT = 8080

const router = express.Router()
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'src/views')

// handle sessions
const expiryDate = new Date(Date.now() + 60 * 60 * 1000)
app.use(cookieParser('secret'))
app.use(session({
  name:'session',
  cookie: { maxAge: 60000, expires: expiryDate },
  secret: 'secret',
  resave: true,
  saveUninitialized: false
}))
app.use(flash())

app.use(express.static('public'))
app.use(logging)
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routesAPI(router))
app.use(routesView(router))
app.use(errorController.error404View)

app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})

module.exports = app