import {combineReducers} from 'redux';  
import brandies from './brandyReducer';

const rootReducer = combineReducers({  
  // short hand property names
  brandies
})

export default rootReducer;  
