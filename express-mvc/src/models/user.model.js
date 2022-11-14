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

module.exports = {
  getUser: () => {
    return transaction.get('users')
  },
  getUserById: (id) => {
    const user = transaction.get('users', (item) => item.id === Number(id))
    return user.length > 0 ? user[0] : {}
  },
  createUser: (data) => {
    // nama, email
    if (validation(data).length > 0) {
      throw new Error(validation(data))
    }
    
    return transaction.create('users', data)
  },
  updateUser: (data) => {
    // nama, email
    if (validation(data).length > 0) {
      throw new Error(validation(data))
    }
    
    // params = table, filter, data
    return transaction.update('users', (row) => row.id === data.id, data)
  },
  deleteUser: (id) => {
    transaction.remove('users', (row) => row.id === Number(id))
    return id
  }
}