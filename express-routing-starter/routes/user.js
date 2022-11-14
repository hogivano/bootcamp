module.exports = (path, router) => {
  router.get(`${path}/`, (req, res) => {
    res.send('User Hello World!')
  })

  // /user/create
  router.post(path + '/create', (req, res) => {
    res.send('Hello World!')
  })

  // /user/update
  router.put(path + '/update', (req, res) => {
    res.send('Hello World!')
  })

  router.get(path + '/:id', (req, res) => {
    res.send(req.params.id)
  })

  router.get(path + '/:idUser/product/:idProduct', (req, res) => {
    console.log('query params',
      'filter=', req.query.filter,
      'orderby=', req.query.orderby)
    res.send({
      idUser: Number(req.params.idUser),
      idProduct: Number(req.params.idProduct)
    })
  })

  router.delete(path + '/', (req, res) => {
    res.send('Delete a route /user')
  })

  return router
}