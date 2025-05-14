import mongoose from "mongoose";
const recordSchema = new mongoose.Schema({
    
},{typestamp:true})

export const Record = mongoose.model("Record", recordSchema)