require('marko/node-require').install()

const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('express-flash')
const logging = require('./utils/logging')
const helmet = require('helmet')
const routesAPI = require('./routes/api')
const routesView = require('./routes/view')
const errorController = require('./controllers/error.controller')
const methodOverride = require('method-override')
const cons = require('consolidate')
const markoPlugin = require('@marko/express').default

const PORT = 8080

const router = express.Router()
const app = express()

app.engine('pug', cons.pug)
app.engine('handlebars', cons.handlebars)
app.engine('ejs', cons.ejs)
app.engine('marko', cons.marko)

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// handle sessions
const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hours
app.use(markoPlugin())
app.use(cookieParser('secret'))
app.use(session({
  name:'session',
  cookie: { maxAge: 60000, expires: expiryDate },
  secret: 'secret'
}))
app.use(flash())

app.use(express.static('public'))
app.use(logging)
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method
    delete req.body._method
    return method
  }
}))

app.use(routesAPI(router))
app.use(routesView(router))
app.use(errorController.error404View)

app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})

module.exports = app