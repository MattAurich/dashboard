import * as types from './actionTypes';
import BrandyApi from './api/brandyApi';

export function loadBrandies() {  
  return function(dispatch) {
    return BrandyApi.getAllBrandies().then(brandies => {
      dispatch(loadBrandiesSuccess(brandies));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadBrandiesSuccess(brandies) {  
  return { type: types.LOAD_BRANDIES_SUCCESS, brandies };
}
