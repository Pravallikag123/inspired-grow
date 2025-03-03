const Category = require('../models/Category')

const createCategory = async (req, res) => {
  try {
    const { name } = req.body

    const newCategory = new Category({
      name
    });

    await newCategory.save()
    res.status(201).json(newCategory)
} catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(200).json(categories)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

module.exports = { createCategory, getCategories }
