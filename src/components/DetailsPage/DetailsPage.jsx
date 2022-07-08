import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function DetailsPage() {
  const details = useSelector((store) => store.details);
  const books = useSelector((store) => store.search);
  const history = useHistory();
  const dispatch = useDispatch();
  const Wishlist = (event) => {
    const title = event.target.title;
    const cover = event.target.getAttribute("cover");
    const author = event.target.getAttribute("author");
    const description = event.target.getAttribute("description");
    dispatch({
      type: "FETCH_BOOK",
      payload: {
        title,
        cover,
        author,
        description,
      },
    });
    history.push("/Wishlist");
    // console.log('books---------->', books)
    // console.log('id------>', books.id)
  };

  return (
    <>
      <h1> DETAILS PAGE</h1>
      {details &&
        details.map((detail) => {
          return (
            <div>
              <p> {detail.name}</p>
            </div>
          );
        })}
      {books &&
        books.map((book) => {
          let thumbnail =
            book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.smallThumbnail;
          return (
            <>
              <div key={book.id}>
                <h3 className="title">{book.volumeInfo.title}</h3>
                <img src={thumbnail}></img>
                <h3 className="author">{book.volumeInfo.authors}</h3>
                <h3 className="description">{book.volumeInfo.description}</h3>
              </div>
              <button
                title={book.volumeInfo.title}
                cover={thumbnail}
                author={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                onClick={Wishlist}
              >
                wishlist
              </button>
            </>
          );
        })}
    </>
  );
}
export default DetailsPage;
