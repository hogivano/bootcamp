module.exports = (req, res, next) => {
  const pathUrl = req.originalUrl

  if (req.session.auth && pathUrl.includes('login')) {
    return res.redirect('/user')
  }
  
  if (req.session.auth) {
    return next()
  }

  return res.redirect('/login')
}