module.exports = function (router) {
  router.get('/', function (req, res) {
    res.send('Routes Modular!')
  })

  router.post(`/crerate`, function (req, res) {
    res.send('create')
  })
  
  return router
}