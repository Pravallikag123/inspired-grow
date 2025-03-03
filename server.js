const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const itemRoutes = require('./routes/itemRoutes')
const serviceRoutes = require('./routes/serviceRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const brandRoutes = require('./routes/brandRoutes')
const variantRoutes = require('./routes/variantRoutes')
const importRoutes = require('./routes/importRoutes')

const app = express()
const PORT = process.env.PORT || 3000

dotEnv.config()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully!')
  })
  .catch((error) => {
    console.log('$(error)')
  })

app.use('/item', itemRoutes)
app.use('/service', serviceRoutes)
app.use('/category', categoryRoutes)
app.use('/brand', brandRoutes)
app.use('/variant', variantRoutes)
app.use('/import', importRoutes)

app.listen(PORT, () => {
  console.log(`server started and running at ${PORT}`)
})
