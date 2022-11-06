const router = require('express').Router()

const transaction = require('../utils/data-transactions')
const response = require('../utils/base-response')
const authentication = require("../middleware/authentication")

module.exports = () => {
  router.get('/', (req, res) => {
    const data = transaction.get('categories')
    res.status(200).json(
      response.base(200, 'Success get category', data)
    )
  })

  router.post('/', authentication, (req, res) => {
    try {
      const { name, description } = req.body
    } catch (e) {
      console.log('error', e)
      res.status(400).json(response.base(400, 'Bad Request'))
    }
    
    const data = req.body

    transaction.create('categories', data)

    res.status(200).json(
      response.base(200, 'Success create category', data)
    )
  })

  router.put('/:id', authentication, (req, res) => {
    const { id } = req.params
    const { name, description } = req.body
    
    const data = transaction.update('categories', (item) => item.id === Number(id), { name, description })

    res.status(201).json(
      response.base(201, 'Success update category', data)
    )
  })

  router.delete('/:id', authentication, (req, res) => {
    const { id } = req.params

    transaction.remove('categories', (item) => item.id === Number(id))

    res.status(200).json(
      response.base(200, 'Success delete category', {
        id
      })
    )
  })

  return router
}