
const express = require('express')
const router = express.Router()
const itemController = require('../controllers/itemController')
const Item = require('../models/Item')

// get, post

router.post('/add-item',itemController.createItem)
router.get('/allitems' ,itemController.getItems)


module.exports = router