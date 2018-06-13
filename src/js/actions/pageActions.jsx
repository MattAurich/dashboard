import * as types from './actionTypes';
import pageApi from './api/pageApi';

export function loadPagesSuccess(pages) {  
  return { type: types.LOAD_PAGES_SUCCESS, pages };
}

export function updatePageSuccess(page) {
  return { type: types.UPDATE_PAGE_SUCCESS, page }
}

export function loadPages() {
  return (dispatch) => {
    return pageApi.getAllPages()
      .then((pages) => {
        dispatch(loadPagesSuccess(pages));
      }).catch((error) => {
        throw (error);
      });
  };
}

export function updatePage(page) {
  return (dispatch) => {
    return pageApi.updatePage(page)
      .then((responsePage) => {
        dispatch(updatePageSuccess(responsePage));
      }).catch((error) => {
        throw (error);
      });
  };
}
