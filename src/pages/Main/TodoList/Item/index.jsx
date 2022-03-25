import React from 'react'
import { useRef,useState } from 'react'
import './style.css'

export default function Item(props) {


  const [mouse,setMouse] = useState(false)
  const inputref = useRef()
  const { id,name,done } = props.todo
  function handleMouse(flag){

    setMouse(flag)
    
  }

  function removeTodo(id){
      props.removeTodo(id)
    
  }
  function handleChecked (id,done){
    props.updateTodo(id,inputref.current.checked)
      
  }

  return (
    <li style={{backgroundColor: mouse ?'#ddd' : 'white'}} onMouseEnter={()=>handleMouse(true)} onMouseLeave={()=>handleMouse(false)}>
    <label>
      <input type="checkbox" defaultChecked = {done} ref={inputref} onChange={()=>handleChecked(id)} />
      <span>{name}</span>
    </label>
    <button  className="btn btn-danger" style={{display:mouse?'block':'none'}} onClick={() => removeTodo(id)}>删除</button>
  </li>
  )
}
