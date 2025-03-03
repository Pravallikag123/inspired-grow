const Variant = require('../models/Variant')

const createVariant = async (req, res) => {
  try {
    const { name, productId, price } = req.body

    const newVariant = new Variant({
      name,
      productId,
      price
    })

    await newVariant.save()
    res.status(201).json(newVariant)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

const getVariants = async (req, res) => {
  try {
    const variants = await Variant.find().populate('productId')
    res.status(200).json(variants)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

module.exports = { createVariant, getVariants }

