const express = require('express')
const cors = require('./middleware/cors')
const logging = require('./utils/logging')
const helmet = require('helmet')
const routes = require('./routes')

const PORT = 8080

const router = express.Router()
const app = express()

app.use(logging)
app.use(helmet())
app.use(express.json())

app.use('*', cors)

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World!'
  })
})

app.use(routes(router))

app.all('*', (req, res) => {
  res.status(404).send({
    success: false,
    message: 'Not Found'
  })
})

app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})

module.exports = app