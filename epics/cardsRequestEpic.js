// Core
import { of } from 'rxjs';
import { tap, map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// DB
import db from '../db/db';

// Utils
import { drawCards } from '../utils/';

// Actions
import { ON_CARDS_REQUEST, CARDS_REQUEST_SUCCESS } from '../actions';

// Epic
export const cardsRequestEpic = (action$, state$) => action$.pipe(
    ofType(ON_CARDS_REQUEST),
    tap( () => console.log( 'BTN WAS PRESSED!!!!' ,typeof action$, typeof state$) ),
    mergeMap(
      action => {

        const num = action.payload ? +action.payload : null;
        const cards = drawCards(num, db);

        return of(cards);

    }),
    map( (cards) => ({ type: CARDS_REQUEST_SUCCESS, payload: cards })
  )
);
