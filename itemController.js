const item = require('../models/Item')

const createItem = async(req,res)=>{
    try{
        const {name,category,brand,price} =req.body
        
        const Item = new item({
            name,
            category,
            brand,
            price
        })
        await Item.save()
        res.status(201).json(Item)
    }  catch(error){
        console.error("there is an error:",error)
        res.status(500).json({message:'server error'})
    }
}

const getItems = async(req,res)=>{
    try{
        const items = await item.find()
        res.status(200).json(items)
    }catch(error){
        console.error("there is an error:",error)
        res.status(500).json({message:"server error"})
    }
}
