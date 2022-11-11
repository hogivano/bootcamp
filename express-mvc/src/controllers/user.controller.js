const userModel = require('../models/user.model')
const response = require('../utils/base-response')

const indexView = (req, res, next) => {
  const data = userModel.getUser()

  res.render('user/index', {
    data: data
  })
}

const getUserApi = (req, res) => {
  const data = userModel.getUser()

  res.status(200).json(
    response.base(200, 'Success get users', data)
  )
}

module.exports = {
  getUserApi,
  indexView
}