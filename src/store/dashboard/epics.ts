import { Action } from 'redux';
import { Observable } from 'rxjs';

import {
  delay,
  filter,
  mapTo,
} from 'rxjs/operators';

const pong = (action$: Observable<Action>): Observable<Action> => action$.pipe(
  filter((action: Action) => action.type === 'PONG'),
  delay(1000),
  mapTo({ type: 'PING' }),
);

export default {
  pong,
};
