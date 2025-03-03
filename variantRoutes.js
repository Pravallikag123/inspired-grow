
const express = require('express')
const router = express.Router()
const variantController = require('../controllers/variantController')
const Variant = require('../models/Variant')


router.post('/add-variant',variantController.createVariant)
router.get('/allvariants' ,variantController.getVariants)


module.exports = router
