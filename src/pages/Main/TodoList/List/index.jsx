import React from 'react'
import './style.css'
import Item from '../Item'
import {useSelector} from "react-redux";

export default function List(props){

  const todo = useSelector(state => state.todo)
    return(
      <ul className='todo-main'>
          {
              todo.map(todo=>{
                  return <Item key={todo.id} removeTodo ={props.removeTodo} updateTodo={props.updateTodo} todo={todo} />
              })
          }
      </ul>
    )
}