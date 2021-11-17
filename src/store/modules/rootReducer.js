import { combineReducers } from 'redux';
import exampleReducer from './questions/reducer';

export default combineReducers({
  example: exampleReducer,
});
