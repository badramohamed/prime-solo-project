import React from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';


function SearchPage(){
    const dispatch= useDispatch();
    const books = useSelector(store=>store.details);
    // const history = useHistory('')
    const [search,setSearch]=useState('');    
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch({
            type: "FETCH_SEARCH",
            payload: search,
        }); 
        console.log('search for book ' + search);
        setSearch('');
        // history.push('/search');
        
    }
    useEffect(() => {
        dispatch({
            type:'FETCH_DETAILS'
        })
    },[])
    
    return (
        <>
            <section>
               <form onSubmit= {handleSubmit}>
                <label>
                  <input
                  type="search"
                  placeholder="Enter Your Book Name"
                  value = {search}
                  onChange={(evt) => setSearch(evt.target.value)}/>
                <button>Search</button>
                </label>
             </form>
             <>
        <ul> 
          {books && 
          books.map((item)=>{
            console.log('The list item is:', item)
            return(
                <>
                <img src={item.volumeInfo.title}></img>
                </>
            )
          })
          }

        </ul>
        
        
        </>

        </section>
        </>
        
        
        )
    }
    
    export default SearchPage;