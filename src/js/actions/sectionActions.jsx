import * as types from './actionTypes';
import sectionApi from './api/sectionApi';

export function loadSectionsSuccess(sections) {
  return { type: types.LOAD_SECTIONS_SUCCESS, sections };
}

export function updateSectionSuccess(section) {
  return { type: types.UPDATE_SECTION_SUCCESS, section };
}

export function createSectionSuccess(section) {
  return { type: types.CREATE_SECTION_SUCCESS, section };
}

export function deleteSectionSuccess(section) {
  return { type: types.DELETE_SECTION_SUCCESS, section };
}

export function loadSections() {
  return dispatch =>
    sectionApi.getAllSections()
      .then(sections => dispatch(loadSectionsSuccess(sections)))
      .catch((error) => { throw (error); });
}

export function updateSection(section) {
  return dispatch =>
    sectionApi.updateSection(section)
      .then((responseSection) => {
        dispatch(updateSectionSuccess(responseSection));
      }).catch((error) => {
        throw (error);
      });
}

export function createSection(section) {
  return dispatch => 
    sectionApi.createSection(section)
      .then(responseSection => dispatch(createSectionSuccess(responseSection)))
      .catch((error) => {
        throw (error);
      });
}

export function deleteSection(section) {
  return dispatch =>
    sectionApi.deleteSection(section)
      .then(() => {
        dispatch(deleteSectionSuccess(section));
      })
      .catch((error) => {
        throw (error);
      });
}
