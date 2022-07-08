import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Book ({books}){


    const handleComplete = ()=>{
        console.log(id);
        dispatch({
            type: 'SET_COMPLETE',
            payload: books.id,
            
        })
        // history.push('/Details');
        console.log('>>.>>>>>>>',books)
        
    }

    const handleDelete = ()=>{
        dispatch({
            type:'DELETE_BOOK',
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
                <button onclick={handleDelete}> delete</button>
                <button onclick={handleComplete}> complete</button>


                </div>
        </>
    )
}
export default Book;