// routes/printRoutes.js
const express = require('express')
const router = express.Router()

// Define routes here, for example:
router.get('/print', (req, res) => {
  res.send('Print route')
})

module.exports = router
