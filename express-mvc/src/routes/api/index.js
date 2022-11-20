const authentication = require("../../middleware/authentication")
const user = require('./user.route')
const category = require('./category.route')
const bootcamp = require('./bootcamp.route')
const cors = require('../../middleware/cors')

const API_VERSION = '/api/v1'

module.exports = (router) => {
  router.use(`${API_VERSION}/user`, [authentication, user()])
  router.use(`${API_VERSION}/category`, category())
  router.use(`${API_VERSION}/bootcamp`, bootcamp())
  router.use(`${API_VERSION}/*`, (req, res) => {
    res.status(404).send({
      success: false,
      message: 'Not Found'
    })
  })
  router.use(`${API_VERSION}/*`, cors)

  return router
}