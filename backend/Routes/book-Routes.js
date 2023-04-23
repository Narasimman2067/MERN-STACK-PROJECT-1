import express from "express";
import {addBooks, deleteBook, editBook, getBook, getBookById } from "../Controllers/Book-Controllers.js";


export const bookRouter =express.Router();


bookRouter.get("/getbook",getBook)
bookRouter.get("/getbook/:id",getBookById)
bookRouter.post("/addbook",addBooks)
bookRouter.put("/editbook/:id",editBook)
bookRouter.put("/deletebook/:id",deleteBook)




export default bookRouter;

