module.exports = {
  error404View: (req, res) => {
    res.status(404).render('404')
  }
}