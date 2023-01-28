const {createCustomError} = require('../errors')
const Event = require('../models/event')

const eventPost = async(req, res) => {
    try {
        const pEvent = await Event.create(req.body)
        res.status(201).json({ pEvent })
    } catch (error) {
        res.status(500).json({msg:"event,nt"})
    }
}

const getEve = async(req, res) => {
    try {
        const events = await Event.find({})
        res.status(201).json({ events })
    } catch (error) {
        res.status(500).json({msg:'no event for thee'})
    }
}

const get1Eve =async (req, res,next) => {
    try {
        const { id: taskID } = req.params
        const One = tt = await Event.find(req.query)
  const task = await Event.findOne({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({msg:'no this event ma g'})
}
}

const upEve =async (req, res,next) => {
    try {
        const { id: taskID } = req.params

        const task = await Event.findOneAndUpdate({ _id: taskID }, req.body, {
          new: true,
          runValidators: true,
        })
      
        if (!task) {
          return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
      
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({msg:'up what dawg'})
    }
}

const delEve =async (req, res,next) => {
    try {
        const { id: taskID } = req.params
        const task = await Event.findOneAndDelete({ _id: taskID })
        if (!task) {
          return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        res.status(200).json({ task })    
    } catch (error) {
        res.status(500).json({msg:'del wot lmao '})
    }
    
}

module.exports = {
    eventPost,
    delEve,
    upEve,
    getEve,
    get1Eve
}