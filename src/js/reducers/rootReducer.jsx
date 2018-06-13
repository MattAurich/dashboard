import { combineReducers } from 'redux';  
import pages from './pageReducer';
import sections from './sectionReducer';

const rootReducer = combineReducers({  
  // short hand property names
  pages,
  sections,
});

export default rootReducer;
