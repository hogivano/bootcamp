const router = require('express').Router()
const userController = require('../../controllers/user.controller')
const sessionMiddleware = require('../../middleware/session')

module.exports = () => {
  router.get('/', sessionMiddleware, userController.indexView)
  router.get('/create', userController.createView)
  router.post('/', userController.createUserHandler)
  router.delete('/:id', userController.deleteUserHandler)

  return router
}