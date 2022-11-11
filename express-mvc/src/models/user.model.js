const transaction = require('../utils/data-transactions')

const validation = (model) => {
  const arrMsg = []
  if (!model.name) {
    arrMsg.push('Name is required')
  }

  if (!model.email) {
    arrMsg.push('Email is required')
  }

  return arrMsg
}

exports.getUser = () => {
    return transaction.get('users')
}

exports.createUser = (data) => {
  if (validation(data).length > 0) {
    throw new Error(validation(data))
  }
  
  return transaction.create('users', data)
}