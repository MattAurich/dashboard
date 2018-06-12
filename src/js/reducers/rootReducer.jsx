import {combineReducers} from 'redux';  
import pages from './pageReducer';

const rootReducer = combineReducers({  
  // short hand property names
  pages
});

export default rootReducer;  
