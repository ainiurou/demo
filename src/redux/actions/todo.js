import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO
} from "../contants";

export function addTodo(todo){
  console.log(todo)
    return{
        type:ADD_TODO,
        todo
    }
}

export function removeTodo(id){
    return{
        type:REMOVE_TODO,
        id
    }
}

export  function updateTodo(id,done){
    return{
        type:UPDATE_TODO,
        id,
        done
    }
}