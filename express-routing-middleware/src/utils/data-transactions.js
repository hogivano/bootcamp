const path = require('path')
const fs = require('fs')
const schema = require('../data/local/scheme')

const checkSchema = (table, data) => {
  const dataSchema = schema[table]
  const dataKeys = Object.keys(data)
  const dataSchemaKeys = Object.keys(dataSchema)

  if (dataKeys.length !== dataSchemaKeys.length) {
    throw new Error('Invalid length data')
  }

  dataKeys.forEach((key) => {
    if (typeof dataSchema[key]() !== typeof data[key]) {
      // console.log('dataSchema[key]', key, dataSchema[key], typeof data[key])
      throw new Error('Invalid data')
    }
  })

  return data
}

const get = (table, filter = null) => {
  const rows = require(path.join(__dirname, '../data/local', `${table}.json`))

  if (filter) {
    return rows.filter(filter)
  }
  return rows
}

const create = (table, data) => {
  const rows = get(table)
  const id = (rows.length > 0 ? Number(rows[rows.length-1].id) : 0) + 1
  const newData = checkSchema(table, Object.assign({ id }, data))
  rows.push(newData)
  
  fs.writeFileSync(path.join(__dirname, '../data/local', `${table}.json`), JSON.stringify(rows, null, 2))
  return newData
}

const update = (table, filter, data) => {
  const rows = get(table)
  const row = rows.find(filter)
  
  const indexRow = rows.findIndex(filter)

  if (indexRow === -1) {
    throw new Error('Data not found')
  }

  rows[indexRow] = checkSchema(table, Object.assign(row, data))

  fs.writeFileSync(path.join(__dirname, '../data/local', `${table}.json`), JSON.stringify(rows, null, 2))

  return rows[indexRow]
}

const remove = (table, filter) => {
  const rows = require(path.join(__dirname, '../data/local', `${table}.json`))
  const indexRow = rows.findIndex(filter)

  if (indexRow === -1) {
    throw new Error('Data not found')
  }

  rows.splice(indexRow, 1)

  fs.writeFileSync(path.join(__dirname, '../data/local', `${table}.json`), JSON.stringify(rows, null, 2))
}

module.exports = {
  get,
  create,
  update,
  remove
}