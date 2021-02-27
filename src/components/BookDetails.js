import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">Title: {book.title}</div>
      <div className="author">Author: {book.author}</div>
    </li>
  );
};

export default BookDetails;
