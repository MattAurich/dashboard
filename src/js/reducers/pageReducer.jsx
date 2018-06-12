import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function catReducer(state = initialState.pages, action) {
  switch(action.type) {
    case types.LOAD_PAGES_SUCCESS:
      return action.pages
    default: 
      return state;
  }
}
