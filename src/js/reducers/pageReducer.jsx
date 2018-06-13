import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function pageReducer(state = initialState.pages, action) {
  switch (action.type) {
    case types.LOAD_PAGES_SUCCESS:
      return action.pages;
    case types.UPDATE_PAGE_SUCCESS:
      return [
        ...state.filter(page => page.id !== action.page.id),
        Object.assign({}, action.page),
      ];
    default:
      return state;
  }
}
