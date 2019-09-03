// Core
import { tap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// Actions
import { BTN_PRESSED } from '../actions';

// Epic
export const cardsRequestEpic = (action$, state$) => action$.pipe(
  ofType(BTN_PRESSED),
  tap( () => console.log( 'BTN WAS PRESSED!!!!' ,typeof action$, typeof state$) ),
  map(() => ({ type: 'BTN_PRESSED' }))
);
