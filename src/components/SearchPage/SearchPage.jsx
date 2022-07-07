import React from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';

function SearchPage(){
    const dispatch= useDispatch();
    // const books = useSelector(store=>store.search);
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
    // useEffect(() => {
    //     dispatch({
    //         type:'FETCH_DETAILS', 
    //         payload: books
    //     })
    // },[])
    
    return (
        <>
            <section>
               <form onSubmit= {handleSubmit}>
                <label>
                  <input
                  type="search"
                  placeholder="Enter Your Book Name"
                  value = {search}
                  onChange={(evt) => setSearch(evt.target.value)}
                 />
                  
                <button>Search</button>
                </label>
             </form>
             <>
           
        
        </>

        </section>
        </>
        
        
        )
    }
    
    export default SearchPage;