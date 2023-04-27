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

export const getBookById = async (req, res) => {
  // we need params ,id to get data by id

  const id = req.params.id;
  let book;

  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }

  //  validate this
  if (!book) {
    return res
      .status(404)
      .json({ data: "unable to find  the book from this Id" });
  }
  return res
    .status(200)
    .json({ data: "book find and shown using this id", book });
};

export const addBooks = async (req, res) => {
  const { bookname, author, description, price, available,image} = req.body;
  let books;

  try {
    // destructured the Schemas to create dynamically
    books = new Book({
      bookname,
      author,
      description,
      price,
      available,
      image,
    });
    await books.save();
  } catch (error) {
    console.log(error);
    return res.status(500).json("internal server error");
  }

  //  validate this
  if (!books) {
    return res.status(404).json({ data: "unable to Add the book" });
  }
  return res.status(201).json({ data: "book successfully created", books });
};

export const editBook = async (req, res) => {
  // to get id we want params of the user id
  const id = req.params.id;
  // to edit we need the body of the whole user from the id
  const { bookname, author, description, price, available, image } = req.body;
  let books;

  try {
    // to destructure the Book model to get the body content based on id
    books = await Book.findByIdAndUpdate(id, {
      bookname,
      author,
      description,
      price,
      available,
      image,
    });

    await books.save();
  } catch (error) {
    console.log(error);
  }

   //  validate this
   if (!books) {
    return res.status(404).json({ data: "unable to edit  the content" });
  }
  return res.status(200).json({ data: "content edited successfully ", books });


};


// ***************Delete the Book *************

export const deleteBook =async(req,res)=>{
  const id =req.params.id;
  let books
  try {
    // await here to wait the respnse to triggered
    books =await Book.findByIdAndRemove(id)
  } catch (error) {
console.log(error)
}

  //  validate this
  if (!books) {
    return res.status(404).json({ data: "unable to delete  the content" });
  }
  return res.status(200).json({ data: "content deleted  successfully ", books });




}