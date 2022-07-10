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
    
    useEffect(() => {
        dispatch({ type: 'DELETE_DB_BOOKS' });
   
        
    }, []);


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