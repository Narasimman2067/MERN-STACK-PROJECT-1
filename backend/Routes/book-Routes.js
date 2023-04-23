import express from "express";
import {getBook } from "../Controllers/Book-Controllers.js";


export const bookRouter =express.Router();


bookRouter.get("/getbook",getBook)





export default bookRouter;

