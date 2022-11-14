const userRouter = require('./user')
const productRouter = require('./product')

module.exports = (router) => {
  userRouter('/user', router)
  productRouter('/product', router)
  
  return router
}