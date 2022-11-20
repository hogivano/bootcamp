const userModel = require('../models/user.model')
const response = require('../utils/base-response')
const helpers = require('../utils/helpers')

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
  res.render('user/form')
}

const updateView = (req, res) => {
  const { id } = req.params
  const data = userModel.getUserById(id)
  res.render('user/form', {
    id,
    data
  })
}

const createUserHandler = (req, res) => {
  // fungsi create user baru
  const { name, email } = req.body
  try {
    userModel.createUser({
      name,
      email,
      token: helpers.randomStr(),
      role: 'admin',
      is_blocked: false
    })

    req.flash('message', 'Success create user')
    res.redirect('/user')
  } catch (error) {
    req.flash('message', 'Error create user')
    res.redirect('/user')
  }
}

const updateUserHandler = (req, res) => {
  // Update user
  const { id } = req.params
  const { name, email } = req.body
  try {
    userModel.updateUser({
      id: Number(id),
      name,
      email,
    })
    req.flash('message', 'Success update user')
    res.redirect('/user')
  } catch(error){
    req.flash('message', 'Error update user')
    res.redirect('/user')
  }
}

const deleteUserHandler = (req, res) => {
  const { id } = req.params
  try {
    userModel.deleteUser(id)
    req.flash('message', 'Success delete user')
    res.redirect('/user')
  } catch(error) {
    req.flash('message', 'Error delete user')
    res.redirect('/user')
  }
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
  updateView,
  createUserHandler,
  deleteUserHandler,
  updateUserHandler,
}