
const express = require('express')
const router = express.Router()

router.get('/print', (req, res) => {
  res.send('Print route')
})

module.exports = router
