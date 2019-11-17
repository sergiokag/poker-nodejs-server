// Core
import { map, ignoreElements, withLatestFrom, tap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// DB
import db from '../db/db';

// Utils
//import { drawCards } from '../utils/';

// Actions
import { START_GAME, GAME_STARTED } from '../actions';

// Epic
export const gameEpic = (action$, state$) => action$.pipe(
    ofType(START_GAME),
    tap( (action) => {  console.log('incoming', action)  } ),
    withLatestFrom(state$),
    map(
      ([ action, state ]) => {

        const { id }  = action.payload;
        const deck = [ ...db ];
        const {  sockets, players } = state;
        const wSocket = sockets.find( socket => socket.id === id );

        //////////////////////////// TODO: move to another file emission to client

        console.log(wSocket.id, id, players)

        // to player
        wSocket.emit('server-event', {
          type: GAME_STARTED,
          payload: {
            deck,
            pot: 0,
            players,
            phase: {
              statusId: 1
            }
          }
        });

    }),
    ignoreElements()
);
