const mongoose = require ('mongoose')
const Category = require('./Category')
const Brand = require('./Brand')

const ItemSchema = new mongoose.Schema({
//  name, category, brand, price 
name:{
    type:String,
    required:true
},
category:{
    type:String,
    required:true
},
brand:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
}
})
module.exports = mongoose.model('Item',ItemSchema)
