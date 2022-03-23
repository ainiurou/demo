import React, {useEffect, useState} from "react";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";
import * as todoActions from '../../../redux/actions/todo'
import {useDispatch} from "react-redux";


export  default  function TodoList (){

    const [todos, setTodos] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{

    })

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
                <List todos = {todos} removeTodo={removeTodo} updateTodo={updateTodo} />
                <Footer />
            </div>
        </div>
    )
}