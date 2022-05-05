import { combineReducers } from 'redux';

import buttonReducer from './buttonReducer';

const reducers = combineReducers({
  button: buttonReducer,
});

export default reducers;
