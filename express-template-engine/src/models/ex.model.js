const Model = require('./model.js');

class Ex extends Model {
  constructor(data = {}) {
    super('categories', data, ['id', 'name', 'description'])
  }
  
  getSuper() {
    return super.get()
  }
}

// just call class model
exports = {
  Ex
}

// already create model
module.exports = Ex