import React from 'react'
import './style.css'
import Item from '../Item'

export default function List(props){

    return(
        <div>
            <ul className='todo-main'>
                {
                    props.todos.map(todo=>{
                        return <Item key={todo.id} todo={todo} />
                    })
                }
            </ul>
        </div>
    )
}