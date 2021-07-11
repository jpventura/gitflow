import { Action } from 'redux';
import { Observable } from 'rxjs';

import {
  delay,
  filter,
  mapTo,
} from 'rxjs/operators';

const ping = (action$: Observable<Action>): Observable<Action> => action$.pipe(
  filter((action: Action) => action.type === 'PING'),
  delay(1000),
  mapTo({ type: 'PONG' }),
);

const signIn = (action$: Observable<Action>): Observable<Action> => action$.pipe(
  filter((action: Action) => action.type === 'SIGN_IN'),
);

const signOut = (action$: Observable<Action>): Observable<Action> => action$.pipe(
  filter((action: Action) => action.type === 'SIGN_OUT'),
);

const signUp = (action$: Observable<Action>): Observable<Action> => action$.pipe(
  filter((action: Action) => action.type === 'SIGN_UP'),
);

export {
  ping,
  signIn,
  signOut,
  signUp,
};
