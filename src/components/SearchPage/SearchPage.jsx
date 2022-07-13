import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function SearchPage() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "FETCH_SEARCH",
      payload: search,
    });
    console.log("search for book " + search);
    setSearch("");
    // history.push('/search');
  };
 

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="search"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(evt) => setSearch(evt.target.value)}
            />
            <button>search</button>
          </label>
        </form>
        <></>
      </section>
    </>
  );
}

export default SearchPage;
