import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SearchPage from "../SearchPage/SearchPage";

function SearchList() {
  const books = useSelector((store) => store.search);
  // const [details, setDetails]=useState('');
  const history = useHistory();
  

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
              <div key={item.id} onClick={() => history.push("/details")}>
                <h3 className="title">{item.volumeInfo.title}</h3>
                <img src={thumbnail}></img>
              </div>
              {/* {JSON.stringify(books)} */}
            </>
          );
        })}
    </>
  );
}
export default SearchList;
