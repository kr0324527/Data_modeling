import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    user:{
        type:mongoose.Schema.type.ObjectId,
        ref:"User",
        required:true
    },
    productimage:{
        type:String
    },
    stock:{
        default:0,
        type:Number
    }
},{timestamps:true})

export const Product = mongoose.model("Product",productSchema)

