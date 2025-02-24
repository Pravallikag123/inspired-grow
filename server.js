const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const itemRoutes = require('./routes/itemRoutes')
const bodyParser = require('body-parser')

const app = express()

const PORT = process.env.PORT || 3000

dotEnv.config()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('MongoDB connected successfully!')
})
.catch((error)=>{
    console.log('$(error')
})

app.use('/item',itemRoutes)
app.listen(PORT,()=>{
    console.log(`server started and running at ${PORT}`);

})