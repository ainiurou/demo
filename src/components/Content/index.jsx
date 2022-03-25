import React from 'react'
import './style.css'
import TodoList from '../../pages/Main/TodoList'

import { useSelector } from 'react-redux'

export default function Content() {

  const toggle = useSelector(state => state.sidebar)
  return (
    <div className= {toggle.status ? 'content-toggle' : 'content-close'}>
      <TodoList />
    </div>
  )
}
