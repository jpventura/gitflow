import { combineEpics } from 'redux-observable';

import {
  pong,
} from './epics';

const epics = combineEpics(
  pong,
);

export default epics;
