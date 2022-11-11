const user = require('./user.route')
const home = require('./home.route')

module.exports = (router) => {
  router.use('/', home())
  router.use('/user', user())

  return router
}