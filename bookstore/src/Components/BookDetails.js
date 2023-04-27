import { Button } from "@mui/material";
import React from "react";
import "../Css/Books.css";
import "../Css/Book2.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getBookRoutes } from "../Features/apiHelpers";

export function Book(props) {
  const history =useNavigate
  // destructure the value to get from backend to store in props
  const { _id, author, bookname, price, description, image } = props.book;
 
  const deleteHandler = async()=>{
    await axios
      .delete(`https://mern-stack-project-1-bookstore.vercel.app/books/delete/${_id}`)
      .then((res) => res.data)
     .then(()=>history.push("/get"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="controll-booklist">
      <div className="card-booklist">
        <img src={image} alt={bookname} />
        <h1 className="main-title">
          <b>Title :</b> <span className="title">{bookname}</span>
        </h1>
        <article>
          <b>Author :</b>
          <span>{author}</span>{" "}
        </article>
        <p>
          <b>Description :</b>
          <span>{description}</span>
        </p>
        <h3>
          <b>Price :</b> <span>{price}</span>
          <b>Rs</b>
        </h3>
      </div>
      <div className="btn-grp">
        <Button
          LinkComponent={Link}
          to={`/edit/${_id}`}
          variant="contained"
          color="secondary"
        >
          Update
        </Button>
        <a href="/get">
          <Button
            onClick={deleteHandler}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </a>
      </div>
    </div>
  );
}
export default Book;
