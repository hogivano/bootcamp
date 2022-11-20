const response = require('../utils/base-response')
const bootcampModel = require('../models/bootcamp.model')

const getBootcampApi = (req, res) => {
  const data = bootcampModel.getBootcamp()
  res.status(200).json(
    response.base(200, 'success get bootcamps', data)
  )
}

module.exports = {
  getBootcampApi
}