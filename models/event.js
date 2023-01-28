const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    eventName : {
      type:String,
      required:[true,'name de bc']
    },
    city : {
      type:String,
      required:[true,'city bata bc']
    },
    eventtype: {
      type:String,
      required:[true,'kia hai be']
    },
    ppp: {
      type:String,
      required:[true,'kitne admi the']
    },
    address : {
      type:String,
      required:[true,'address de ghr a k maru ga']
    },
    eventDsc:{
      type:String,
      required:[true,'kia kerna hai']
    },
  })

module.exports=mongoose.model("Event",eventSchema)