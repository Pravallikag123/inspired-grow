const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController')
const category = require('../models/Category')

router.post('/create', categoryController.createCategory)
router.get('/all', categoryController.getCategories)

module.exports = router
