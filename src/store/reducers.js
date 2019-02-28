import { combineReducers } from "redux";

export const myStore = (state = {}, action) => { 
    switch (action.type) { 
      case 'GET_DATA_SIMPLEFORM':
        return action.myStore;
      default:
        return state;
    }
  };

  export default combineReducers({
    myStore
  });