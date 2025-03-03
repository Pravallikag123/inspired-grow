const mongoose = require('mongoose')

const VariantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Variant', VariantSchema)
