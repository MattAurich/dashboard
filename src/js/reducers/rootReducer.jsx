import { combineReducers } from 'redux';
import pages from './pageReducer';
import sections from './sectionReducer';
import location from './locationReducer';

const rootReducer = combineReducers({
  pages,
  sections,
  location,
});

export default rootReducer;
