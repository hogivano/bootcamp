const router = require('express').Router()
const bootcampController = require('../../controllers/bootcamp.controller')

module.exports = () => {
  router.get('/', bootcampController.getBootcampApi)

  return router
}