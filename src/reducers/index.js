import { combineReducers } from 'redux';

import pokemon from './pokemonReducer';
import ui from './uiReducer';

export default combineReducers({
  pokemon,
  ui
});
