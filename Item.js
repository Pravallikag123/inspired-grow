const mongoose = require ('mongoose')

const ItemSchema = new mongoose.Schema({
//  name, type, price, quantity
name:{
    type:String,
    required:true
},
type:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
quantity:{
    type:Number,
    required:true
}
})
module.exports = mongoose.model('Item',ItemSchema)