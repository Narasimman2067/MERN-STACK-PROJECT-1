import Book from "../Models/Book.js";

export const getBook = async (req, res) => {
  // declare the component name to use
  let books;
  // use trycatch to handle the errors
  try {
    // await here with that model
    books = await Book.find();
  } catch (error) {
    next(error);
    console.log(error);
  }

  if (!books) {
    return res.status(404).json({ data: "book not found" });
  }
  return res.status(200).json({ data: "book found", books });
};




export const addBooks = async (req, res) => {
  const {bookname, author, description, price,available} = req.body;
  let books;
  
try {
// destructured the Schemas to create dynamically
    books = new Book({
        bookname,
        author,
        description,
        price,
        available,
      });
     await books.save();

   
} catch (error) {
    console.log(error)
    return res.status(500).json("internal server error")
}

 //  validate this
if(!books)
{
    return res.status(404).json({data:"unable to Add the book"})
}
return request.status(201).json({data:"book successfully created",books})


};
