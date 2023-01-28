const mongoose = require('mongoose')

const hotelschema = new mongoose.Schema({
    awsHotelImageLink : String,
    awsRoomImgLibk:String,
    hName : {
      type:String,
      required:[true,'name de bc']
    },
    ppd :Number,
    hAddress:{
      type:String,
      required:[true,'name de bc']
    },
    hDsc:{
      type:String,
      required:[true,'name de bc']
    },
    city:{
      type:String,
      required:[true,'name de bc']
    },
    roomType:{
      type:String,
      required:[true,'name de bc']
    },
    roomDsc:{
      type:String,
      required:[true,'name de bc']
    },
    facilities:{
      type:String,
      required:[true,'name de bc']
    },
    bedSz:{
      type:String,
      required:[true,'name de bc']
    },
    bedNo:{
      type:String,
      required:[true,'name de bc']
    },
    noOppl:{
      type:Number,
      default:0
    }
  })

module.exports=mongoose.model("Hotels",hotelschema)