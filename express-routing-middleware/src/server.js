const express = require('express')
const transactions = require('./utils/data-transactions')

const PORT = 8080

const app = express()

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World!',
    data: transactions.get('users')
  })
})

app.listen(PORT, () => {
  console.log('Server is running on port 3000')
})

module.exports = app