import React from "react";
import {
    HashRouter as Router,
    Routes,
    Route
}from 'react-router-dom'
import Layout from "../pages/Main/Layout";
import TodoList from "../pages/Main/TodoList";
const AppRouter =() =>{
    return(
        <Router>
          {/* <Layout /> */}
          <Routes>
            <Route exact path='/*' element={<Layout />}></Route>
           
          </Routes>
            
        </Router>
    )
}

export default AppRouter