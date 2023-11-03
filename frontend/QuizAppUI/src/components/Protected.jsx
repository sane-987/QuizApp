import React, { useState } from 'react'
import { Navigate } from "react-router-dom";

const Protected = ({children}) => {
    if(localStorage.getItem("role") === "admin")
        return children
    else
        <Navigate to="/"/>
    
}


export default Protected