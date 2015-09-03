import React, {Component} from 'react';
import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';


// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import {Provider} from 'react-redux';
import rootReducer from '../reducers';

import App from 'components/App.jsx';
require('../styles/global.less');

const injectTapEventPlugin = require('react-tap-event-plugin');
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const finalCreateStore = compose(
  // Enables your middleware:
  applyMiddleware(promiseMiddleware),
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);
const store = finalCreateStore(rootReducer);

export default class Root extends Component {
  render() {
    return <div>
      <Provider store={store}>
        {() => <App />}
      </Provider>
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    </div>;
  }
}
