import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import axios from "axios";
// import SearchPage from "../SearchPage/SearchPage";
import Book from "../Book/Book";
function CurrentReads(){
   
    const dispatch = useDispatch();
    const history = useHistory();
    const booksdb = useSelector(store => store.booksdb);
    
    // // use effect that will be used to dispatch my fetchMovies 
    useEffect(() => {
        dispatch({ type: 'FETCH_DB_BOOKS' });
        
    }, []);


    // handlesubmit that will push the data and post as well as push users to the details page
  
    
    // return that will loops through the data to grab each one needed
    return (
      <>
        {booksdb.map((books) => {
            return (
                <Book key={books.id} books={books} />
               
                );
        })}
            
        </>
       
            );
           

        } 
   
export default CurrentReads;