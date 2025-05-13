import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userinfo:{
        username:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,
        },
        password:{
            type:String,
            required:true,
            trim:true,
        },
    }
},{timestamps:true});
export const User = mongoose.model("User", userSchema);