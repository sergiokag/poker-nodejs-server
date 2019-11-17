import { combineReducers } from 'redux';
import players from './players';
import cards from './cards';
import sockets from './sockets';

export default combineReducers({
  players,
  cards,
  sockets,
});
