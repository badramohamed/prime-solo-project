import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
///////////////////////MATERIAL UI /////////////////////////
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Button, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Card, CardMedia, CardContent, CardActions } from "@material-ui/core";

function Book({ books }) {
  const dispatch = useDispatch();
  const classes = makeStyles();

  const handleComplete = () => {
    console.log(books.id);
    dispatch({
      type: "FETCH_COMPLETED_BOOKS",
      payload: books.id,
    });
    swal({
      title: "Good job!",
      text: "hope you enjoyed the book!",
      icon: "success",
    });

    // history.push('/Details');
    console.log(">>.>>>>>>>", books);
  };

  const handleDelete = () => {
    dispatch({
      type: "DELETE_DB_BOOKS",
      payload: books.id,
    });
    swal({
      title: "DELETE",
      text: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your book has been deleted! Thank you! ", {
          icon: "success",
        });
      } else {
        swal("No edits have been made");
      }
    });
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <Container
          maxWidth="sm"
          className={classes.cardGrid}
          style={{ marginTop: "50px", marginLeft: "50px", marginRight: "50px" }}
        >
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom>
              <h2>{books.title} </h2>
              <img src={books.cover} />
              <h2> {books.author} </h2>
              <p>{books.description} </p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={handleDelete}
              size="small"
              className={classes.buttons}
              variant="contained"
              color="primary"
            >
              {" "}
              delete
            </Button>

            <Button
              onClick={handleComplete}
              size="small"
              className={classes.buttons}
              variant="contained"
              color="primary"
            >
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={1}
                  precision={0.5}
                  size=""
                />
              </Stack>
            </Button>
          </CardActions>
        </Container>
      </Card>
    </>
  );
}
export default Book;
