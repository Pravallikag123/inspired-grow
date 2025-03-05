
const express = require('express')
const router = express.Router()
const variantController = require('../controllers/variantController')
const Variant = require('../models/Variant')


router.post('/variant',variantController.createVariant)
router.get('/all' ,variantController.getVariants)

router.post('/', (req, res, next) => {
    console.log('POST /variant route reached')
    next()
  }, variantController.createVariant)
  

module.exports = router
