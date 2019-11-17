// Core
import { map, ignoreElements, withLatestFrom } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// Actions
import { ON_RESPOND_TO_CLIENTS } from '../actions';

// Utils
import { createArrayWithEmptyObj } from '../utils';

// Epic
export const respondToClientsEpic = (action$, state$) => action$.pipe(
    ofType(ON_RESPOND_TO_CLIENTS),
    withLatestFrom(state$),
    map(
      ([ action, state ]: any) => { //TODO: Change the any type

        const { cards, id } = action.payload;
        const { sockets } = state;

        const wSocket = sockets.find( s => s.id === id );

        //tmp
        console.log('RespondToClient: ', action.payload.cards, sockets.length)

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
