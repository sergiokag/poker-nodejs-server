import {
  PLAYER_CONNECTED,
  PLAYER_DISCONNECTED
} from '../actions';

const initialState = [];

function players(state = initialState, action) {
  switch (action.type) {
    case PLAYER_CONNECTED:
      return [ ...state, action.payload ];
    case PLAYER_DISCONNECTED:
      return [ ...state ].filter( p => p.id !== action.payload );
    default:
      return state;
  }
};

export default players;
