const Model = require('./ex.model')

const model = new Model({
  id: 1,
  name: 'test',
})
console.log('get', model.getSuper())
console.log('exModel', model.tableName())
console.log('fields', model.getFields())
console.log('name', model.name)
model.name = 'Name Changed'
console.log('name', model.name)