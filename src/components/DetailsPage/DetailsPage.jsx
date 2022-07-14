import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Card, CardMedia, CardContent, CardActions } from "@material-ui/core";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";







function DetailsPage() {
  const details = useSelector((store) => store.details);
  const books = useSelector((store) => store.search);
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = makeStyles();

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
    <CardContent className={classes.cardContent}>
        <Typography>
      {/* <h1> DETAILS:</h1> */}
      <h2>Book Title: {details.volumeInfo && details.volumeInfo.title}</h2>
      <h2> Authors: {details.volumeInfo && details.volumeInfo.authors}</h2>
      <h2> Summary: {details.volumeInfo && details.volumeInfo.description}</h2>
      <img
        src={details.volumeInfo && details.volumeInfo.imageLinks.smallThumbnail}
      />
    </Typography>
    </CardContent>

      <Button
        title={details.volumeInfo && details.volumeInfo.title}
        author={details.volumeInfo && details.volumeInfo.authors}
        cover={
          details.volumeInfo && details.volumeInfo.imageLinks.smallThumbnail
        }
        description={details.volumeInfo && details.volumeInfo.description}
        onClick={Wishlist}
        size= "small"
        variant="contained"
        color="primary"
       
      >
        add book
      </Button>
     
    </>
  );
}
export default DetailsPage;
