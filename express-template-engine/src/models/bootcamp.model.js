const transaction = require('../utils/data-transactions')
const categoryModel = require('./category.model')
const bCategoryModel = require('./bootcamp_category.model')

const validation = (model) => {
  const arrMsg = []

  if (!model.name) {
    arrMsg.push('Name is required')
  }

  if (!model.description) {
    arrMsg.push('Description is required')
  }

  return arrMsg
}

const getBootcamp = (filter = null) => {
  const data = (filter) ? transaction.get('bootcamps', filter) : transaction.get('bootcamps')
  data.forEach((item) => {
    item.category = categoryModel.getCategory((item) => item.id === Number(bCategoryModel.getBootcampCategoryById(item.id).category_id))
  })
  return data
}

const getBootcampById = (id) => {
  const data = transaction.get('bootcamps', (item) => item.id === Number(id))
  data.forEach((item) => {
    item.category = categoryModel.getCategoryById((item) => item.id === Number(bCategoryModel.getBootcampCategoryById(item.id).category_id))
  })
  return data.length > 0 ? data[0] : {}
}

const createBootcamp = (data) => {
  if (validation(data).length > 0) {
    throw new Error(validation(data))
  }

  return transaction.create('bootcamps', data)
}

const updateBootcamp = (data) => {
  if (validation(data).length > 0) {
    throw new Error(validation(data))
  }

  return transaction.update('bootcamps', (item) => item.id === Number(data.id), data)
}

const deleteBootcamp = (id) => {
  transaction.remove('bootcamps', (item) => item.id === Number(id))

  return id
}

module.exports = {
  getBootcamp,
  getBootcampById,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp
}