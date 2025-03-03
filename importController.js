const csv = require('csv-parser')
const fs = require('fs')
const Item = require('../models/Item')
const Service = require('../models/Service')

const importItems = async (req, res) => {
  const items = []
  fs.createReadStream('items.csv')
    .pipe(csv())
    .on('data', (row) => items.push(row))
    .on('end', async () => {
      try {
        await Item.insertMany(items)
        res.status(200).json({ message: 'Items imported successfully' })
      } catch (error) {
        res.status(500).json({ message: 'Error importing items' })
      }
    })
}

const importServices = async (req, res) => {
  const services = []
  fs.createReadStream('services.csv')
    .pipe(csv())
    .on('data', (row) => services.push(row))
    .on('end', async () => {
      try {
        await Service.insertMany(services)
        res.status(200).json({ message: 'Services imported successfully' })
      } catch (error) {
        res.status(500).json({ message: 'Error importing services' })
      }
    })
}

module.exports = { importItems, importServices }

