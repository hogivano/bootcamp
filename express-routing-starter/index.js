const express = require('express')
const indexRoutes = require('./routes/index')
const app = express()

const router = express.Router()

// routing modular
app.use('/api/v1', indexRoutes(router))

app.listen(3000, () => {
  console.log('server is running on port 3000')
})