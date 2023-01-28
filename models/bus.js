const mongoose = require('mongoose')
const bus = new mongoose.Schema({
    awsBusImg:String,
    busName:{
        type:String,
        required:[true,'name de bc']
      },
    busType:{
        type:String,
        required:[true,'name de bc']
      },
    depFrom:{
        type:String,
        required:[true,'name de bc']
      },
    depAdd:{
        type:String,
        required:[true,'name de bc']
      },
    depTime:{
        type:String,
        required:[true,'name de bc']
      },
    arrival:{
        type:String,
        required:[true,'name de bc']
      },
    arrivalAddress:{
        type:String,
        required:[true,'name de bc']
      },
    arrivalTime:String,
    luggege:Number,
    facilities:{
        type:String,
        required:[true,'name de bc']
      }
    })
    
module.exports=mongoose.model("Bus",bus)