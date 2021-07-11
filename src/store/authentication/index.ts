import { combineEpics } from 'redux-observable';

import {
  ping,
  signIn,
  signOut,
  signUp,
} from './epics';

const epics = combineEpics(
  ping,
  signIn,
  signOut,
  signUp,
);

export default epics;
