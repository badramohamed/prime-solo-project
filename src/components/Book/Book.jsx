import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";



function Book ({books}){
     const dispatch = useDispatch();

    const handleComplete = ()=>{
        console.log(books.id);
        dispatch({
            type: 'FETCH_COMPLETED_BOOKS',
            payload: books.id,
            
        })
        // history.push('/Details');
        console.log('>>.>>>>>>>',books)
        
    }

    const handleDelete = ()=>{
        dispatch({
            type:'DELETE_DB_BOOKS',
            payload: books.id
        })


    }
    
    return (
        <>
         <div >

                <h3>{books.title}</h3>
                <h3>{books.author}</h3>
                <h3>{books.description}</h3>
                <img src={books.cover} alt={books.title}/>
                <button onClick={handleDelete}> delete</button>
                <button onClick={handleComplete}> complete</button>


                </div>
        </>
    )
}
export default Book;