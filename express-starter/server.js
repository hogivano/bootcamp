const express = require('express')
const app = express()

const auth = 'Bearer 1234'

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.send('<h1>Hello World</h1>')
})

app.get('/user', (req, res) => {
  console.log('Authorization', req.headers.authorization)
  if (req.headers.authorization === auth) {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send({ name: 'John', age: 30 })
    res.end()
  }

  res.status(502).send('Unauthorized')
  res.end()
})

app.listen(8008, () => {
  console.log('Server is running on port 8008')
})