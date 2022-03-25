import { combineReducers } from 'redux'
import todo from "./todo";
import sidebar from './sidebar'

const rootReducer = combineReducers({
   todo,
   sidebar
});

export default rootReducer