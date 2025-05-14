import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Degree:{
        type:String,
        required:true
    },
    expertise:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        default:0
    },
    WorkingHospital:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        }
    ]
},{typestamp:true})

export const Doctor = mongoose.model("Doctor", doctorSchema)