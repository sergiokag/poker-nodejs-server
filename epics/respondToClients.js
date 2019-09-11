// Core
import { map, ignoreElements } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// Actions
import { ON_RESPOND_TO_CLIENTS } from '../actions';

// Web Socket
import { socketsList } from '../app';

// Utils
import { createArrayWithEmptyObj } from '../utils';

// Epic
export const respondToClientsEpic = (action$, state$) => action$.pipe(
    ofType(ON_RESPOND_TO_CLIENTS),
    map(
      ({ payload: { cards, id } }) => {

        const wSocket = socketsList.find( s => s.id === id );

        console.log('RespondToClient: ', wSocket.id)

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
