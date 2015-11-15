import {combineReducers} from 'redux';

import mainReducer from './main-reducer';

const rootReducer = combineReducers({
  mainReducer,
});

export default rootReducer;
