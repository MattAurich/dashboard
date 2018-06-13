import * as types from './actionTypes';  
import SectionApi from './api/SectionApi';

export function loadSections() {
  return function(dispatch) {
    return SectionApi.getAllSections().then(sections => {
      dispatch(loadSectionsSuccess(sections));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadSectionsSuccess(sections) {
  return { type: types.LOAD_SECTIONS_SUCCESS, sections };
}
