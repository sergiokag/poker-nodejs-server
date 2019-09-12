import {
  SOCKET_ADDED,
  SOCKET_REMOVED
} from '../actions';

const initialState = [];

function sockets(state = initialState, action) {

  switch (action.type) {

    case SOCKET_ADDED:
      return [ ...state, action.payload ];

    case SOCKET_REMOVED:
      return [ ...state ].filter( s => s.id !== action.payload );

    default:
      return state;
  }

};

export default sockets;
