import {
  SOCKET_ADDED,
  SOCKET_REMOVED
} from '../actions';

const initialState: any = []; //TODO: Change the any type

function sockets(state = initialState, action) {

  switch (action.type) {

    case SOCKET_ADDED:
      return [ ...state, action.payload ];

    case SOCKET_REMOVED:
      return [ ...state ].filter( (s:any) => s.id !== action.payload ); //TODO: Change the any type

    default:
      return state;
  }

};

export default sockets;
