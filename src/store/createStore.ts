import {
  Action,
  createStore as reduxCreateStore,
  PreloadedState,
  Reducer,
  StoreEnhancer,
} from 'redux';

const rootReducer: Reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  return state;
};

type StoreCreator<S, A extends Action, Ext, StateExt> = {
  enhancer?: StoreEnhancer<Ext> & StoreEnhancer<Ext, StateExt>,
  preloadedState?: PreloadedState<S>,
  reducer?: Reducer<S, A>,
};

function createStore<S, A extends Action, Ext, StateExt>({
  enhancer,
  reducer = rootReducer,
  preloadedState,
}: StoreCreator<S, A, Ext, StateExt>) {
  return reduxCreateStore(reducer, preloadedState, enhancer);
}

export default createStore;
