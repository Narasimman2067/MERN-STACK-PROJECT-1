import Book from "../Models/Book.js";




export const getBook= async(req,res)=>{
// declare the component name to use
    let books;
    // use trycatch to handle the errors
    try {
        // await here with that model
        books = await Book.find()
    } catch (error) {
        next(error)
        console.log(error)
    }

if(!books)
{
    return res.status(404).json({data:"book not found"})
}
return res.status(200).json({data:"book found",books})



}