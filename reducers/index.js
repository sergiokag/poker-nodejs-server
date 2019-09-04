import { combineReducers } from 'redux';
import players from './players';
import cards from './cards';

export default combineReducers({
  players,
  cards,
});
