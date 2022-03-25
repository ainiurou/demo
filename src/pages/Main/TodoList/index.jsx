import React, {useEffect, useState} from "react";
import Header from "./Header";
import List from "./List";
import * as todoActions from '../../../redux/actions/todo';
import {useDispatch,useSelector} from "react-redux";
import './style.css'
import api from "../../../api";

export  default  function TodoList (){

    //const [todos, setTodos] = useState([])
    //const todo = useSelector(state => state.todo)
    //console.log(todo)
    const dispatch = useDispatch()
    useEffect(()=>{
      api.getTodo().then(res=>{
        if(res.data.status === 200){
          dispatch(todoActions.addTodo(res.data.result.todolist))
          
        }
      })
    },[])
    

    function removeTodo(id){
        dispatch(todoActions.removeTodo(id))
    }

    function updateTodo(id,done){
        dispatch(todoActions.updateTodo(id,done))
    }

    function addTodo(todo){
        dispatch(todoActions.addTodo(todo))
    }

    return(
        <div className='todo-container'>
            <div className='rodo-wrap'>
                <Header addTodo={addTodo} />
                <List  removeTodo={removeTodo} updateTodo={updateTodo} />
            </div>
        </div>
    )
}