const user = require('./user.route')
const home = require('./home.route')
const category = require('./category.route')

module.exports = (router) => {
  router.use('/', home())
  router.use('/user', user())
  router.use('/category', category())

  return router
}