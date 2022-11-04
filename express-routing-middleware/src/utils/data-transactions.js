const path = require('path')
const fs = require('fs')

const handlers = (func, hasData) => {
  try {
    const data = hasData ? func() : null
    if (!hasData) func()

    return {
      success: true,
      data
    }
  } catch (error) {
    return {
      success: false,
      error
    }    
  }
}

const get = (table) => {
  return require(path.join(__dirname, '../data/local', `${table}.json`))
}

const create = (table, data) => {
  const rows = require(path.join(__dirname, '../data/local', `${table}.json`))
  rows.push(data)
  
  fs.writeFileSync(path.join(__dirname, '../data/local', `${table}.json`), JSON.stringify(rows, null, 2))
}

const update = (table, filter, data) => {
  const rows = require(path.join(__dirname, '../data/local', `${table}.json`))
  const row = rows.find(filter)
  
  const indexRow = rows.findIndex(filter)

  if (indexRow === -1) {
    throw new Error('No row found')
  }

  rows[indexRow] = Object.assign(row, data)

  fs.writeFileSync(path.join(__dirname, '../data/local', `${table}.json`), JSON.stringify(rows, null, 2))
}

const remove = (table, filter) => {
  const rows = require(path.join(__dirname, '../data/local', `${table}.json`))
  const indexRow = rows.findIndex(filter)

  if (indexRow === -1) {
    throw new Error('No row found')
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