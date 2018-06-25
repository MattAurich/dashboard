import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.sections, action) {
  switch (action.type) {
    case types.LOAD_SECTIONS_SUCCESS:
      return action.sections;
    default:
      return state;
  }
}
