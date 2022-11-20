const Template = require('../views/marko/index.marko')

module.exports = {
  indexView: (req, res) => {
    res.render('marko/index.marko', {
      num: 20
    })
  }
}