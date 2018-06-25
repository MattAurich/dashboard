import * as types from './actionTypes';

export function locationChangeSuccess(location) {
  return { type: types.LOCATION_CHANGE_SUCCESS, location };
}
