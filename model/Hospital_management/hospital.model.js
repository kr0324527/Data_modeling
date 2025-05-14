import mongoose from "mongoose";
const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        reqiured:true
    },
    addressLine1:{
        type:String,
        required:true
    },
    addressLine2:{
        type:String,
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    noOfDoctors:{
        type:Number,
        reqiured:true
    },
    SpecilizedIn:[
        {
            type:String
        }
    ]
},{typestamp:true})

export const Hospital = mongoose.model("Hospital", hospitalSchema)