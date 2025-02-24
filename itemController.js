const item = require('../models/Item')

const createItem = async(req,res)=>{
    try{
        const {name,type,price,quantity} =req.body
        
        const Item = new item({
            name,
            type,
            price,
            quantity
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


module.exports ={createItem,getItems}