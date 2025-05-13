import mongoose from "mongoose";
const subtodosSchema = mongoose.Schema({
    content:{
      type:String,
      required : true  
    },
    compete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps:true})

export const Subtodo = mongoose.model("Subtodo",subtodosSchema)