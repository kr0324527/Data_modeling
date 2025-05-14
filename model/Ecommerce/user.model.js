import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
    
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    }
},{timestamps:true})

export const User = mongoose.model("User",userSchema)