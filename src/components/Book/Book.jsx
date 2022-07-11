import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function Book({ books }) {
  const dispatch = useDispatch();

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
      <div>
        <h3>{books.title}</h3>
        <h3>{books.author}</h3>
        <h3>{books.description}</h3>
        <img src={books.cover} alt={books.title} />
        <button onClick={handleDelete}> delete</button>
        <button onClick={handleComplete}> complete</button>
      </div>
    </>
  );
}
export default Book;
