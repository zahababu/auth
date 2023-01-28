const {createCustomError}= require('../errors')
const Hotel = require('../models/hotel')


const hotelPost =async (req,res)=>{
    try {
        const hotel = await Hotel.create(req.body)
        res.status(201).json(hotel)
    } catch (error) {
        res.status(500).json({msg:'hotel,nt'})
    }
}

const getHot =async (req,res)=>{
    try {
        const hotel = await Hotel.find({})
        res.status(201).json(hotel)
    } catch (error) {
        res.status(500).json({msg:'lmao cant get hotel cause u broke'})
    }
}
const get1Hot=async (req,res,next)=>{
    try {
        const { id: taskID } = req.params
  const task = await Hotel.findOne({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({msg:'lmao not even 1'})
}
}
const delHot=async (req,res,next)=>{
    try {
        const { id: taskID } = req.params
        const task = await Hotel.findOneAndDelete({ _id: taskID })
        if (!task) {
          return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        res.status(200).json({ task })    
    } catch (error) {
        res.status(500).json({msg:'cant del what u aint got'})
    }
}
const upHot=async (req,res,next)=>{
    try {
        const { id: taskID } = req.params

        const task = await Hotel.findOneAndUpdate({ _id: taskID }, req.body, {
          new: true,
          runValidators: true,
        })
      
        if (!task) {
          return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
      
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({msg:'up down ur out of town'})
    }
}
module.exports={
    upHot,delHot,get1Hot,getHot,hotelPost
}