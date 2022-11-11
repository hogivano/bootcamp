const router = require('express').Router()
const homeController = require('../../controllers/home.controller')

module.exports = () => {
  router.get('/', homeController.indexView)

  return router
}