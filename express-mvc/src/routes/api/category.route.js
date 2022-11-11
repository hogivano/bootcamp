const router = require('express').Router()

const transaction = require('../../utils/data-transactions')
const response = require('../../utils/base-response')
const authentication = require("../../middleware/authentication")

module.exports = () => {
  router.get('/', (req, res) => {
    const data = []
    res.status(200).json(
      response.base(200, 'Success get category', data)
    )
  })

  router.post('/', authentication, (req, res) => {
    const data = []
    res.status(200).json(
      response.base(200, 'Success create category', data)
    )
  })

  router.put('/:id', authentication, (req, res) => {
    const data = []
    res.status(201).json(
      response.base(201, 'Success update category', data)
    )
  })

  router.delete('/:id', authentication, (req, res) => {
    const { id } = req.params

    res.status(200).json(
      response.base(200, 'Success delete category', {
        id
      })
    )
  })

  return router
}