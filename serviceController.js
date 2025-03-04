const Service = require('../models/Service')

const createService = async (req, res) => {
  try {
    const { name, description, price } = req.body

    const newService = new Service({
      name,
      description,
      price
    })

    
    const savedService = await newService.save()

    
    res.status(201).json(savedService)
  } catch (err) {
    res.status(500).json({ message: "Error creating service", error: err.message })
  }
}

module.exports = {
  createService,  
}


  
