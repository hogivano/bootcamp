const router = require('express').Router()
const userController = require('../../controllers/user.controller')

module.exports = () => {
  router.get('/', userController.indexView)
  router.get('/create', userController.createView)
  router.get('/update/:id', userController.updateView)
  router.post('/', userController.createUserHandler)
  router.put('/:id', userController.updateUserHandler)
  router.delete('/:id', userController.deleteUserHandler)

  return router
}