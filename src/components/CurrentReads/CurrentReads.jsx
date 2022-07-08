import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SearchPage from "../SearchPage/SearchPage";
function CurrentReads(){
    
    return(
        <>
        <h1> Current Reads Page</h1>
        </>
    )
}
export default CurrentReads