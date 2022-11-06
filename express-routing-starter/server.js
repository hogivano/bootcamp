const express = require('express')
const router = express.Router()

const routes = require('./routes')

const app = express()

app.use((req, res, next) => {
  console.log('Logging...')
  next()
})

app.use((err, req, res, next) => {
  console.log('Error handler')
  res.status(500).send('Something broke!')
})

app.use('/admin/*', authencticationAdmin)

// index path
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// params
app.get('/user/:id', (req, res) => {
  res.send(req.params.id)
})

app.get('/user:id', (req, res) => {
  res.send(req.params.id)
})

// query
app.get('/query', (req, res) => {
  res.send(req.query)
})

// multi handlers
const handler1 = (req, res, next) => {
  console.log('handler1')
  req.body = Object.assign({}, req.body, { name: 'John' })
  
  next()
}

const handler2 = (req, res) => {
  console.log('handler2')
  res.send(req.body)
  res.end()
}

// call by sequence
app.get('/multi', [handler1, handler2])


// chain
app.route('/chain')
  .get((req, res) => {
    res.send({
      method: 'chain GET'
    })
  })
  .post((req, res) => {
    res.send({
      method: 'chain POST'
    })
  })
  .put((req, res) => {
    res.send({
      method: 'chain PUT'
    })
  })

// router modular
app.use('/routes',routes(router))

// undefined path
app.get('*', (req, res) => {
  res.send('404', 404)
})


app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})