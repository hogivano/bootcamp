const router = require('express').Router()
const response = require('../../utils/base-response')
const userController = require('../../controllers/user.controller')

module.exports = () => {
  router.get('/', userController.getUserApi)

  router.post('/', (req, res) => {
    const data = []
    res.status(200).json(
      response.base(200, 'Success create user', data)
    )
  })

  router.put('/:id', (req, res) => {
    const data = []
    res.status(201).json(
      response.base(201, 'Success update user', data)
    )
  })

  router.delete('/:id', (req, res) => {
    const { id } = req.params
    res.status(200).json(
      response.base(200, 'Success delete user', {
        id
      })
    )
  })

  return router
}