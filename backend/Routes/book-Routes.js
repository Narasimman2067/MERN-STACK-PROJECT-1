import express from "express";
import {addBooks, deleteBook, editBook, getBook, getBookById } from "../Controllers/Book-Controllers.js";


export const bookRouter =express.Router();


bookRouter.get("/",getBook)
bookRouter.get("/:id",getBookById)
bookRouter.post("/add",addBooks)
bookRouter.put("/edit/:id",editBook)
bookRouter.delete("/delete/:id",deleteBook)




export default bookRouter;

