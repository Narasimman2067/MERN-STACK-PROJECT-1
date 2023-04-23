import express from "express";
import mongoose from "mongoose";
import  dotenv  from 'dotenv';
import bookRouter from "./Routes/book-Routes.js";


dotenv.config()
const app =express();



// database connection

mongoose.connect(process.env.MONGO_URL)
try {
    if (mongoose.connect){
        console.log("mongoose connected succesfully")
    }else{
        console.log("mongooose is not connected")
    }
} catch (error) {
    console.log("mongoose disconnected",error)

}

const PORT =process.env.PORT



app.use("/api/books",bookRouter)






app.use(("/"),(req,res,next)=>{
    res.send("the server had started to build app backend")
})





app.listen(PORT,()=>{
    console.log(`${PORT} is connected succesfully`)}
    )