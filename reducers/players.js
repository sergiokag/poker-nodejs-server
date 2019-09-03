import {
  PLAYER_CONNECTED,
} from '../actions';

const initialState = [];

function players(state = initialState, action) {
  switch (action.type) {
    case PLAYER_CONNECTED:
      return [ ...state, action.payload ];
    default:
      return state;
  }
};

export default players;
