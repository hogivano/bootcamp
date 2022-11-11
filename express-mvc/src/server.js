const express = require('express')
const cors = require('./middleware/cors')
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

app.use(express.static('public'))
app.use(logging)
app.use(helmet())
app.use(express.json())

app.use('*', cors)

app.use(routesAPI(router))
app.use(routesView(router))
app.use(errorController.error404View)

app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})

module.exports = app