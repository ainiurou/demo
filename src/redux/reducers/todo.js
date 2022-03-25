import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO
} from "../contants";

const defaultState = [
  
]

const todo = (state=defaultState,action) => {
    switch(action.type){
        case ADD_TODO:
          const newArr = [...action.todo]
          console.log(newArr)
            return[
                ...state,
                ...newArr
            ]
        case REMOVE_TODO:
            const index = state.findIndex(item=> item.id === action.id)
            return [
                ...state.slice(0,index),
                ...state.slice(index+1)
            ]
        case UPDATE_TODO:
            const  done = action.done
            const  newTodos = state.map(todo=>{
                if (todo.id === action.id) return {...todo,done}
                else return todo
            })
            return [
                ...newTodos
            ]
        default:
          return state
    }
}
export default todo