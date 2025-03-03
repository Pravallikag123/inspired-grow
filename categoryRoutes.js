const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController')
const category = require('../models/Category')

router.post('/add-category', categoryController.createCategory)
router.get('/allcategories', categoryController.getCategories)

module.exports = router
