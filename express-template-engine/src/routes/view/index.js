const user = require('./user.route')
const home = require('./home.route')
const category = require('./category.route')
const sessionMiddleware = require('../../middleware/session')

module.exports = (router) => {
  router.use('/', home())
  router.use('/user', sessionMiddleware, user())
  router.use('/category', category())

  return router
}