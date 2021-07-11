import { applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import createStore from './createStore';

const store = createStore({
  enhancer: applyMiddleware(createEpicMiddleware()),
});

export default store;
