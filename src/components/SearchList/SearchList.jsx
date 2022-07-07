import React from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';




function SearchList (){
    const books = useSelector(store=>store.search);
    // const [details, setDetails]=useState('');
    const history = useHistory();
    // const dispatch = useDispatch();
    
    // const handleFavorite =()=>{
    //     dispatch({
    //       type: 'SET_DETAILS',
    //       payload: setDetails
    //     })
    //     history.push('/home');
    //   }
    
   
   
  return(
    <>
          {books && 
          books.map((item)=>{
            let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            // console.log('The list item is:', item)
            return(
                <>
            <div onClick={books.id} >
           
                <h3 className="title">{item.volumeInfo.title }</h3>
                <img src={thumbnail}></img>
                <h3 className="author">{item.volumeInfo.authors}</h3>
                <h3 className="description">{item.volumeInfo.description}</h3>
                
</div>
                </>
            )
          })
          }
          
     
        
        
    </>
  )
} 
 export default SearchList;