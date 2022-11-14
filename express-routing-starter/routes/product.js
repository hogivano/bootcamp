module.exports = (path, router) => {
  router.get(path + '/', (req, res) => {
    res.send('Hello World!')
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

  router.delete(path + '/', (req, res) => {
    res.send('Delete a route /user')
  })

  return router
}