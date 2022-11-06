const router = require('express').Router()

const transaction = require('../utils/data-transactions')
const response = require('../utils/base-response')
const helpers = require('../utils/helpers')

module.exports = () => {
  router.get('/', (req, res) => {
    const users = transaction.get('users')
    res.status(200).json(
      response.base(200, 'Success get users', users)
    )
  })

  router.post('/', (req, res) => {
    try {
      const { name, email, role } = req.body
    } catch (e) {
      console.log('error', e)
      res.status(400).json(response.base(400, 'Bad Request'))
    }
    
    const token = helpers.randomStr()
    const data = Object.assign({ token, is_blocked: false }, req.body)

    transaction.create('users', data)

    res.status(200).json(
      response.base(200, 'Success create user', data)
    )
  })

  router.put('/:id', (req, res) => {
    const { id } = req.params
    const { name, email } = req.body
    
    const data = transaction.update('users', (item) => item.id === Number(id), { name, email })

    res.status(201).json(
      response.base(201, 'Success update user', data)
    )
  })

  router.delete('/:id', (req, res) => {
    const { id } = req.params

    transaction.remove('users', (item) => item.id === Number(id))

    res.status(200).json(
      response.base(200, 'Success delete user', {
        id
      })
    )
  })

  return router
}