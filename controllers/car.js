const Car = require('../models/car')
const {createCustomError}= require('../errors')

const carPost =async (req,res)=>{
    try {
      const car = await Car.create(req.body)
      res.status(201).json(car)
    } catch (error) {
      res.status(500).json({msg:'cat,nt'})
    }
}

const getCar =async (req,res)=>{
  try {
    const car = await Car.find({})
    res.status(201).json({ car })
} catch (error) {
    res.status(500).json({msg:'lmao broke '})
}
}

const get1Car =async(req,res,next)=>{
  try {
    const { id: taskID } = req.params
const task = await Car.findOne({ _id: taskID })
if (!task) {
return next(createCustomError(`No task with id : ${taskID}`, 404))
}

res.status(200).json({ task })
} catch (error) {
    res.status(500).json({msg:'this aint ur car bruh'})
}
}

const delCar=async (req,res,next)=>{
  try {
    const { id: taskID } = req.params
    const task = await Car.findOneAndDelete({ _id: taskID })
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })    
} catch (error) {
    res.status(500).json({msg:'no car to del'})
}
}

const upCar=async(req,res,next)=>{
  try {
    const { id: taskID } = req.params

    const task = await Car.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
  
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
  
    res.status(200).json({ task })
} catch (error) {
    res.status(500).json({msg:'lmao broke up'})
}
}
module.exports={
    carPost,getCar,upCar,delCar,get1Car
}