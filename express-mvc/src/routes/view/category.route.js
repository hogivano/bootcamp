const router = require('express').Router()
const categoryController = require('../../controllers/category.controller')

module.exports = () => {
  router.get('/', categoryController.indexView)
  router.get('/create', categoryController.createView)
  router.get('/update/:id', categoryController.updateView)
  router.post('/create', categoryController.createCategoryHandle)
  router.post('/update/:id', categoryController.updateCategoryHandler)
  router.post('/delete/:id', categoryController.deleteCategoryHandler)

  return router
}