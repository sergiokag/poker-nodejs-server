// Core
import { map, ignoreElements } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// Actions
import { ON_RESPOND_TO_CLIENTS } from '../actions';

// Web Socket
import { wSocket } from '../app';

// Utils
import { createArrayWithEmptyObj } from '../utils';

// Epic
export const respondToClientsEpic = (action$, state$) => action$.pipe(
    ofType(ON_RESPOND_TO_CLIENTS),
    map(
      ({ payload: cards }) => {
        // sending to the client
        wSocket.emit('cards request', cards);

        // sending to all clients except sender
        wSocket.broadcast.emit('broadcast cards request', {
          opponentID: wSocket.id,
          opponentCards: createArrayWithEmptyObj(cards.length),
        });
    }),
    ignoreElements()
);
