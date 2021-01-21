import { createStore } from "redux";

const simpleReducer = (state = {}, action) => {
  const {counter} = state
  
  switch(action.type) {
    case 'increment':
      return {counter: counter +1}
    case 'decrement': 
      return {counter: counter -1}
    default:
      return state
  }
}

export const store = createStore(simpleReducer, {counter: 0})