import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.sections, action) {
  switch (action.type) {
    case types.LOAD_SECTIONS_SUCCESS:
      return action.sections;
    case types.UPDATE_SECTION_SUCCESS: {
      const newState = Object.assign([], state);
      const index = state.findIndex(section => section.id == action.section.id);
      newState[index] = action.section;
      return newState;
    }
    case types.CREATE_SECTION_SUCCESS:
      return [
        ...state.filter(section => section.id !== action.section.id),
        Object.assign({}, action.section),
      ];
    case types.DELETE_SECTION_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfSectionToDelete = state.findIndex(section => section.id === action.section.id);
      newState.splice(indexOfSectionToDelete, 1);
      return newState;
    }
    default:
      return state;
  }
}
