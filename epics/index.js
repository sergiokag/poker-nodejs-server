import { tap, map } from 'rxjs/operators';
import ofType from 'redux-observable';

export const clientRequestEpic = (action$, state$) => action$.pipe(
  ofType(CLIENT_REQUEST),
  tap( () => console.log( action$, state$) ),
  map(() => clientRequest())
);
