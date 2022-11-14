const transaction = require('../utils/data-transactions')

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

const getCategory = () => {
  return transaction.get('categories')
}

const getCategoryById = (id) => {
  const data = transaction.get('categories', (item) => item.id === Number(id))
  return data.length > 0 ? data[0] : {}
}

const createCategory = (data) => {
  if (validation(data).length > 0) {
    throw new Error(validation(data))
  }

  return transaction.create('categories', data)
}

const updateCategory = (data) => {
  if (validation(data).length > 0) {
    throw new Error(validation(data))
  }

  return transaction.update('categories', (item) => item.id === Number(data.id), data)
}

const deleteCategory = (id) => {
  transaction.remove('categories', (item) => item.id === Number(id))

  return id
}

module.exports = {
  getCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
}