const user = require('./user.route')
const home = require('./home.route')
const sessionMiddleware = require('../../middleware/session')

module.exports = (router) => {
  router.use('/', home())
  router.use('/user', sessionMiddleware, user())

  return router
}