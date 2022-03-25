import React from 'react'
import TodoList from './TodoList/index'
import { Link } from "react-router-dom"
import './style.css'
import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import SideBar from '../../components/SideBar'

export default function Layout() {


  return (
    
    <div className='outer'>
      <Routes>
        <Route exact path='/' element={<SideBar />}></Route>
      </Routes>
      
      
    </div>
  )
}
