import * as types from './actionTypes';
import PageApi from './api/pageApi';

export function loadPages() {  
  return function(dispatch) {
    return PageApi.getAllPages().then(pages => {
      dispatch(loadPagesSuccess(pages));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPagesSuccess(pages) {  
  return { type: types.LOAD_PAGES_SUCCESS, pages };
}
