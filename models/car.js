const mongoose = require("mongoose")

const carschema = new mongoose.Schema({
    awsCarImg:String,
    carName:{
      type:String,
      required:[true,'name de bc']
    },
    carV:{
      type:String,
      required:[true,'name de bc']
    },
  ppd:{
    type:Number,
    default:0
  },
    noOdoor:{
      type:Number,
      default:0
    },
    noOseat:{
      type:Number,
      default:0
    },
    noOlugg:{
      type:Number,
      default:0
    },
    trans:{
      type:String,
      enum:{
        values:['manual','auto'],
        message:'nahi hai ',
      },
      required:[true,'name de bc']
    },
    airCo:String,
    policy:{
    clean:{
      type:String,
      default:false,
    },
    cancel:String,
    terms:{
      type:String,
      required:[true,'name de bc']
    }
    }
  })

  module.exports=mongoose.model("Car",carschema)