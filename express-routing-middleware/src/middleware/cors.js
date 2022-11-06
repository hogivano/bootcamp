const cors = require('cors')

const whitelist = [
  'http://localhost:3000',
  'http://localhost:8080',
  'http://localhost:8000'
]

const corsOption = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) != -1 || !origin) {
      callback(null, true)
    } else {
      callback('Not allowed by CORS', false)
    }
  },
  optionsSuccessStatus: 200
}

module.exports = cors(corsOption)