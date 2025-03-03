const Brand = require('../models/Brand')

const createBrand = async (req, res) => {
  try {
    const { name } = req.body

    const newBrand = new Brand({
      name
    });

    await newBrand.save()
    res.status(201).json(newBrand)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

const getBrands = async (req, res) => {
  try {
    res.status(200).json(brands)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

module.exports = { createBrand, getBrands }
