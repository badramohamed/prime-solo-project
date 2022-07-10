import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function WishList (){
    const completedList = useSelector(store => store.completed)
    console.log('>>>>>>>>>>',completedList)
    const dispatch = useDispatch();
    // useEffect(() => {
       
    //     dispatch({
    //         type: 'FETCH_DB_COMPLETED'
    //     })
    // }, [])
 
    return(
        <>
        <h2> hi</h2>
        </>
    )
}
export default WishList;