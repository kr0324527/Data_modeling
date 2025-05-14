import mongoose from "mongoose";
const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    disease:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female","Others"],
        required:true
    },
    bloodGroup:{
        type:String,
        reqired:true
    },
    Hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
},{typestamp:true})

export const Patient = mongoose.model("Patient", patientSchema)