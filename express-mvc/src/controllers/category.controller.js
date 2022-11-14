const categoryModel = require('../models/category.model')

const indexView = (req, res) => {
  const data = categoryModel.getCategory()
  return res.render('category/index', {
    data
  })
}

const createView = (req, res) => {
  return res.render('category/form')
}

const updateView = (req, res) => {
  const { id } = req.params
  const data = categoryModel.getCategoryById(id)

  console.log(data)
  res.render('category/form', {
    id,
    data
  })
}

const createCategoryHandle = (req, res) => {
  const { name, description } = req.body
  try {
    const data = categoryModel.createCategory({
      name,
      description
    })
    req.flash('message', 'Success add category')

    res.redirect('/category')
  } catch (errror) {
    req.flash('message', 'Failed add category')
    res.redirect('/category')
  }
}

const updateCategoryHandler = (req, res) => {
  const { id } = req.params
  const { name, description } = req.body
  try {
    categoryModel.updateCategory({
      id,
      name,
      description
    })
    req.flash('message', 'Success update category')
    res.redirect('/category')
  } catch (errror) {
    req.flash('message', 'Failed update category')
    res.redirect('/category')
  }
}

const deleteCategoryHandler = (req,res) => {
  const { id } = req.params

  try {
    categoryModel.deleteCategory(id)
    req.flash('message', 'Success delete category')
    res.redirect('/category')
  } catch (error) {
    req.flash('message', 'Failed delete category')
    res.redirect('/category')
  }
}

module.exports = {
  indexView,
  createView,
  updateView,
  createCategoryHandle,
  updateCategoryHandler,
  deleteCategoryHandler
}