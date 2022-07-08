import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SearchPage from "../SearchPage/SearchPage";

function SearchList() {
  const books = useSelector((store) => store.search);
  const book = useSelector((store) => store.books);
  // const [details, setDetails]=useState('');
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
    history.push('/Wishlist');
    // console.log('books---------->', books)
    // console.log('id------>', books.id)
  };

  return (
    <>
     <SearchPage />
  
      {books &&
        books.map((item) => {
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          console.log("The list item is:", item.volumeInfo.title);
          return (
            <>
             <h1> Search Results </h1>
              <div key={item.id}>
                <h3 className="title">{item.volumeInfo.title}</h3>
                <img src={thumbnail}></img>
                <h3 className="author">{item.volumeInfo.authors}</h3>
                <h3 className="description">{item.volumeInfo.description}</h3>
              </div>
              {/* {JSON.stringify(books)} */}
              <button
                title={item.volumeInfo.title}
                cover={thumbnail}
                author={item.volumeInfo.authors}
                description={item.volumeInfo.description}
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
export default SearchList;
