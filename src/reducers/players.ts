import {
  PLAYER_CONNECTED,
  PLAYER_DISCONNECTED
} from '../actions';

import db from '../../db/db';
import { drawCards } from '../utils';

const initialState = [
  {
    balance: 1000,
    name: 'RTMS',
    isPlaying: false,
    hand: drawCards(5, db).map( c => ({ ...c, flipped: false }) )
  }
];

function players(state = initialState, action) {

  switch (action.type) {

    case PLAYER_CONNECTED:
      return [ ...state, action.payload ];

    case PLAYER_DISCONNECTED:
      return [ ...state ].filter( (p:any) => p.id !== action.payload ); //TODO: Change the any type

    default:
      return state;
  }

};

export default players;
