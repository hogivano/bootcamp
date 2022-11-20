const userModel = require('../models/user.model')

const loginView = (req, res) => {
  if (req.session.auth) {
    return res.redirect('/user')
  }
  res.render('login', {
    msg: req.flash('message')
  })
}

const authHandler = (req, res) => {
  const { email } = req.body
  const data = userModel.getUser()
  const user = data.find(user => user.email === email)
  if (user) {
    req.session.auth = true
    req.flash('message', 'Success login')
    res.redirect('/user')
  } else {
    req.flash('message', 'Failed login')
    res.redirect('/login')
  }
}

module.exports = {
  loginView,
  authHandler
}