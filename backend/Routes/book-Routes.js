import express from "express";
import {addBooks, getBook } from "../Controllers/Book-Controllers.js";


export const bookRouter =express.Router();


bookRouter.get("/getbook",getBook)
bookRouter.post("/addbook",addBooks)





export default bookRouter;

