import React, { useEffect } from 'react'
import './style.css'
import * as sidebarActions from '../../redux/actions/sidebar'
import { useDispatch,useSelector } from 'react-redux'

export default function HeaderNav() {

  const toggle = useSelector(state => state.sidebar)
  
  const dispatch = useDispatch()

  useEffect(()=>{
    
  })
  function toggleSideBar(){
    dispatch(sidebarActions.toggleSidebar())
  }

  return (
    <div className={ toggle.status ? 'header-toggle' : 'header-close' }>
      <button className='btn-toggle' onClick={toggleSideBar}>按钮</button>
    </div>
  )
}
