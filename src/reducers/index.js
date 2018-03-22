import { ADD_ITEM } from '../actions/index';
import { combineReducers } from 'redux';

function itemReducer(state = [], action){
    switch (action.type) {
    case ADD_ITEM:
      state = [...state, action.item];
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  item: itemReducer,
});

export default rootReducer;