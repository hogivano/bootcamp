const userModel = require('../models/user.model')
const response = require('../utils/base-response')

const indexView = (req, res, next) => {
  const data = userModel.getUser()
  const msg = req.flash('message')
  console.log('auth', req.session.auth)
  res.render('user/index', {
    data: data,
    msg
  })
}

const createView = (req, res) => {
  req.session.auth = null
  res.render('user/form')
}

const createUserHandler = (req, res) => {
  req.flash('message', 'Success create user')
  req.session.auth = true
  res.redirect('/user')
}

const deleteUserHandler = (req, res) => {
  const { id } = req.params
  console.log('id', id)
  req.flash('message', 'Success delete user')
  res.redirect('/user')
}

const getUserApi = (req, res) => {
  const data = userModel.getUser()

  res.status(200).json(
    response.base(200, 'Success get users', data)
  )
}

module.exports = {
  getUserApi,
  indexView,
  createView,
  createUserHandler,
  deleteUserHandler,
}