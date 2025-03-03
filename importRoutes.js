
const express = require('express')
const router = express.Router()

router.post('/import', (req, res) => {
  res.send('Import route')
})

module.exports = router
