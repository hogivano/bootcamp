const transaction = require('../utils/data-transactions')

const validation = (model) => {
  const arrMsg = []

  if (!model.category_id) {
    arrMsg.push('Category is required')
  }

  if (!model.bootcamp_id) {
    arrMsg.push('BootcampCategory is required')
  }

  return arrMsg
}

const getBootcampCategory = () => {
  return transaction.get('bootcamp_categories')
}

const getBootcampCategoryById = (id) => {
  const data = transaction.get('bootcamp_categories', (item) => item.bootcamp_id === Number(id))
  return data.length > 0 ? data[0] : {}
}

const getBootcampCategoryByCategoryId = (id) => {
  const data = transaction.get('bootcamp_categories', (item) => item.category_id === Number(id))
  return data.length > 0 ? data[0] : {}
}

const createBootcampCategory = (data) => {
  if (validation(data).length > 0) {
    throw new Error(validation(data))
  }

  return transaction.create('bootcamp_categories', data)
}

const updateBootcampCategory = (data) => {
  if (validation(data).length > 0) {
    throw new Error(validation(data))
  }

  return transaction.update('bootcamp_categories', (item) => item.id === Number(data.id), data)
}

const deleteBootcampCategory = (payload = {
  bootcamp_id: null,
  category_id: null
}) => {
  if (payload.bootcamp_id && payload.category_id) {
    transaction.removeMultiple('bootcamp_categories', (item) => item.category_id === Number(payload.category_id) && item.bootcamp_id === Number(payload.bootcamp_id))
  } else if (payload.category_id) {
    transaction.removeMultiple('bootcamp_categories', (item) => item.category_id === Number(payload.category_id))
  } else if (payload.bootcamp_id) {
    transaction.removeMultiple('bootcamp_categories', (item) => item.bootcamp_id === Number(payload.bootcamp_id))
  } else {
    throw new Error('Invalid payload bootcamp category')
  }

  return id
}

module.exports = {
  getBootcampCategory,
  getBootcampCategoryById,
  getBootcampCategoryByCategoryId,
  createBootcampCategory,
  updateBootcampCategory,
  deleteBootcampCategory
}