import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function pageReducer(state = initialState.pages, action) {
  switch (action.type) {
    case types.LOAD_PAGES_SUCCESS:
      return action.pages;
    case types.UPDATE_PAGE_SUCCESS: {
      const newState = Object.assign([], state);
      const index = state.findIndex(page => page.id == action.page.id);
      newState[index] = action.page;
      return newState;
    }
    case types.CREATE_PAGE_SUCCESS:
      return [
        ...state.filter(page => page.id !== action.page.id),
        Object.assign({}, action.page),
      ];
    case types.DELETE_PAGE_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfPageToDelete = state.findIndex(page => page.id === action.page.id);
      newState.splice(indexOfPageToDelete, 1);
      return newState;
    }
    default:
      return state;
  }
}
