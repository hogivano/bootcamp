const router = require('express').Router()
const homeController = require('../../controllers/home.controller')
const authController = require('../../controllers/auth.controller')

module.exports = () => {
  router.get('/', homeController.indexView)
  router.get('/login', authController.loginView)
  router.post('/login', authController.authHandler)

  return router
}