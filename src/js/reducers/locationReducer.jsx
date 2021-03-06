import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function locationReducer(state = initialState.location, action) {
  switch (action.type) {
    case types.CREATE_PAGE_SUCCESS:
      return {
        redirect: true,
        redirectTo: `/pages/${action.page.id}`,
      };
    case types.DELETE_PAGE_SUCCESS:
      return {
        redirect: true,
        redirectTo: '/pages/',
      };
    case types.CREATE_SECTION_SUCCESS:
      return {
        redirect: true,
        redirectTo: `/sections/${action.section.id}`,
      };
    case types.DELETE_SECTION_SUCCESS:
      return {
        redirect: true,
        redirectTo: '/sections/',
      };
    case types.LOCATION_CHANGE_SUCCESS:
      return initialState.location;
    default:
      return state;
  }
}
