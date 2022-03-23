import React from "react";
import {
    HashRouter as Router,
    Routes,
    Route
}from 'react-router-dom'
const AppRouter =() =>{
    return(
        <Router>
            <Route path='/*' element={<Layout />}></Route>
        </Router>
    )
}