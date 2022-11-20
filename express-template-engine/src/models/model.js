const transactions = require('../utils/data-transactions')

class Model {  
  constructor(table, data, fields = []) {
    this.table = table
    this.data = data
    this.fields = fields
    fields.forEach(function (prop) {
      Object.defineProperty(this, prop, {
        // Create a new getter for the property
        get: function () {
          return this.data[prop]
        },
        // Create a new setter for the property
        set: function (val) {
          this.data[prop] = val
        }
      })
    }, this)
  }

  // base validation data
  validation(data) {
    return false
  }

  tableName() {
    return this.table
  }

  getFields() {
    return this.fields
  }

  get(filter = null) {
    if (filter) {
      return transactions.get(this.tableName(), filter)
    }

    return transactions.get(this.tableName())
  }

  getById(id) {
    const data = transactions.get(this.tableName(), (item) => item.id === Number(id))
    return data.length > 0 ? data[0] : {}
  }

  create() {
    if (this.validation(this.data).length > 0) {
      throw new Error(this.validation(this.data))
    }

    return transactions.create(this.tableName(), this.data)
  }

  create(data) {
    if (this.validation(data).length > 0) {
      throw new Error(this.validation(data))
    }

    return transactions.create(this.tableName(), data)
  }

  update() {
    if (this.validation(this.data).length > 0) {
      throw new Error(this.validation(this.data))
    }

    return transactions.update(this.tableName(), (item) => item.id === Number(this.data.id), this.data)
  }

  update(data) {
    if (this.validation(data).length > 0) {
      throw new Error(this.validation(data))
    }

    return transactions.update(this.tableName(), (item) => item.id === Number(data.id), data)
  }

  delete(id) {
    transactions.remove(this.tableName(), (item) => item.id === Number(id))

    return id
  }
}

module.exports = Model;