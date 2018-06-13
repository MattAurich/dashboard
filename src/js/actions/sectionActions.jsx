import * as types from './actionTypes';
import SectionApi from './api/sectionApi';

export function loadSectionsSuccess(sections) {
  return { type: types.LOAD_SECTIONS_SUCCESS, sections };
}

export function loadSections() {
  return dispatch =>
    SectionApi.getAllSections()
      .then(sections => dispatch(loadSectionsSuccess(sections)))
      .catch((error) => { throw (error); });
}
