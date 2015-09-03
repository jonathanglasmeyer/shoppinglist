import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import rootReducer from '../ducks';
import promiseMiddleware from 'redux-promise';
import { devTools, persistState } from 'redux-devtools';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware, promiseMiddleware),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../ducks', () => {
      const nextRootReducer = require('../ducks');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
