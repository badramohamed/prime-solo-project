import React from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';

function SearchList (){
    const books = useSelector(store=>store.search);
   
   
  return(
    <>
          {books && 
          books.map((item)=>{
            let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            // console.log('The list item is:', item)
            return(
                <>
                {/* <div className="card" onClick={()=>{setShow(true);setItem(item)}}></div> */}
                <h3 className="title">{item.volumeInfo.title && item.volumeInfo.description }</h3>
                <img src={thumbnail}></img>
                </>
            )
          })
          }

     
        
        
    </>
  )
} 
 export default SearchList;