import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function catReducer(state = initialState.brandies, action) {
  switch(action.type) {
    case types.LOAD_BRANDIES_SUCCESS:
      return action.brandies
    default: 
      return state;
  }
}
