import mongoose from "mongoose";


const BookSchema =new mongoose.Schema({

name:{
    type:String,
    required:true,
    
},
price:{
    type:Number,
    required:true,
},
available:{
    type:Boolean,
    required:true,
},



})

export default mongoose.model("Book",BookSchema)