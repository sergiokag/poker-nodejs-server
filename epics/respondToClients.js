// Core
import { map, ignoreElements } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// Actions
import { ON_RESPOND_TO_CLIENTS } from '../actions';

// Web Socket
import { wSocket } from '../app';

// Epic
export const respondToClientsEpic = (action$, state$) => action$.pipe(
    ofType(ON_RESPOND_TO_CLIENTS),
    map(
      ({ payload: cards }) => {   
        wSocket.emit('cards request', cards);
    }),
    ignoreElements()
);

// const responses = [
//     {
//         type: CHANGE_CARDS,
//         payload: [],
//         clientID: '123'
//     },
//     {
//         type: CHANGE_CARDS,
//         payload: [],
//         clientID: '123'
//     },
// ];