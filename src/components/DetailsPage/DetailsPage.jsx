import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Card, CardMedia, CardContent, CardActions } from "@material-ui/core";

function DetailsPage() {
  const details = useSelector((store) => store.details);
  const books = useSelector((store) => store.search);
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch({
      type: "FETCH_DETAILS",
      payload: id,
    });
    dispatch({ type: "FETCH_DB_BOOKS" });
  }, []);

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
    history.push("/books");
    // console.log('books---------->', books)
    // console.log('id------>', books.id)
  };
  console.log(details);

  return (
    <>
      {/* <h1> DETAILS PAGE</h1> */}
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <img
            src={
              details.volumeInfo && details.volumeInfo.imageLinks.smallThumbnail
            }
          />
          <h2>{details.volumeInfo && details.volumeInfo.title}</h2>
          <h2> {details.volumeInfo && details.volumeInfo.authors}</h2>
          <h2>{details.volumeInfo && details.volumeInfo.description}</h2>
        </CardContent>

        <button
          title={details.volumeInfo && details.volumeInfo.title}
          author={details.volumeInfo && details.volumeInfo.authors}
          cover={
            details.volumeInfo && details.volumeInfo.imageLinks.smallThumbnail
          }
          description={details.volumeInfo && details.volumeInfo.description}
          onClick={Wishlist}
        >
          add book
        </button>
      </Card>
    </>
  );
}
export default DetailsPage;
