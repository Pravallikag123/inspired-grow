
const express = require('express')
const serviceController = require('../controllers/serviceController')

const router = express.Router()

router.post('/create', serviceController.createService)

module.exports = router
