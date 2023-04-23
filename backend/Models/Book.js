import mongoose from "mongoose";


const BookSchema =new mongoose.Schema({

bookname:{
    type:String,
    required:true,
    
},
author:{
    type:String,
    required:true,
    
},
description:{
    type:String,
    required:true,
},
price:{
    type:Number,
    required:true,
},
image:{
type:String,
required:true,
},
available:
{
    type:Boolean,
   
},



})

export default mongoose.model("Book",BookSchema)