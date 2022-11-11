const authentication = require("../../middleware/authentication")
const user = require('./user.route')
const category = require('./category.route')

const API_VERSION = '/api/v1'

module.exports = (router) => {
  router.use(`${API_VERSION}/user`, [authentication, user()])
  router.use(`${API_VERSION}/category`, category())
  router.use(`${API_VERSION}/*`, (req, res) => {
    res.status(404).send({
      success: false,
      message: 'Not Found'
    })
  })

  return router
}