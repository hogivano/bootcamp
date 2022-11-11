const transaction = require('../utils/data-transactions')
const response = require('../utils/base-response')

module.exports = (req, res, next) => {
  if (req.headers.authorization) {
    // Bearer <secret token>
    const token = req.headers.authorization.split(' ')[1]

    const rows = transaction.get('users', (item) => item.token === token)

    if (rows.length > 0) {
      req.user = rows[0]
      next()
    } else {
      res.status(401).send(
        response.base(401, 'Unauthorized')
      )
    }
  } else {
    res.status(401).send(
      response.base(401, 'Unauthorized')
    )
  }
}