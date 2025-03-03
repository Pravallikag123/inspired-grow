const express = require('express')
const router = express.Router()
const brandController = require('../controllers/brandController')
const Brand = require('../models/Brand')


router.post('/add-brand', brandController.createBrand)
router.get('/allbrands', brandController.getBrands)

module.exports = router
