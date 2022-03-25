import {
  TOGGLE_SIDEBAR,
  CLOSE_SIDEBAR
  } from '../contants'


const defaultState = {
  status:false
}

const sidebar = (state = defaultState,action) => {
  switch (action.type){
    case TOGGLE_SIDEBAR:
      return{
        status:!state.status
      };

    default:
      return state;
  }
}

export default sidebar