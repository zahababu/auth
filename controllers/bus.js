const Bus = require('../models/bus')
const {createCustomError}= require('../errors')

const busPost =async (req,res)=>{
    try {
      const bus = await Bus.create(req.body)
      res.status(201).json(bus)
    } catch (error) {
      res.status(500).json({ msg: 'Something went wrong, please try again' })
    }
}

const upBus =async (req,res,next)=>{
  try {
    const { id: taskID } = req.params

    const task = await Bus.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
  
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
  
    res.status(200).json({ task })
} catch (error) {
    res.status(500).json({msg:'bus,nt lmao'})
}
}

const getBus =async (req,res)=>{
    try {
      const bus = await Bus.find({})
      res.status(201).json(bus)
    } catch (error) {
      res.status(500).json({msg:'no buses lmao'})
    }
}

const get1Bus =async (req,res,next)=>{
  try {
    const { id: taskID } = req.params
const task = await Bus.findOne({ _id: taskID })
if (!task) {
return next(createCustomError(`No task with id : ${taskID}`, 404))
}

res.status(200).json({ task })
} catch (error) {
    res.status(500).json({msg:'this aint ur bus '})
}
}

const delBus =async (req,res,next)=>{
  try {
    const { id: taskID } = req.params
    const task = await Car.findOneAndDelete({ _id: taskID })
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })    
} catch (error) {
    res.status(500).json({msg:'no bus to delete'})
}
}
module.exports={
    busPost,upBus,delBus,get1Bus,getBus
}