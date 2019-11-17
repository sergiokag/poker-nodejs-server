// Core
import { tap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// DB
import db from '../db/db';

// Utils
import { drawCards } from '../utils/';

// Actions
import { ON_CARDS_REQUEST, ON_RESPOND_TO_CLIENTS } from '../actions';

// Epic
export const cardsRequestEpic = (action$, state$) => action$.pipe(
    ofType(ON_CARDS_REQUEST),
    tap( () => console.log( 'BTN WAS PRESSED!!!!' ,typeof action$, typeof state$) ),
    map(
      action => {

        const id = action.payload.id;
        const num = action.payload ? +action.payload.num : null;
        const cards = drawCards(num, db);

        return { cards, id };

    }),
    map( (payload) => ({ type: ON_RESPOND_TO_CLIENTS, payload })
  )
);
