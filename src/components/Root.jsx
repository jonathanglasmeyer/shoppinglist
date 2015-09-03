require('../styles/global.less');

import React, {Component} from 'react';
import promiseMiddleware from 'redux-promise';
import {Provider} from 'react-redux';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react_';

import configureStore from 'utils/configureStore';
const store = configureStore();

import App from 'components/App.jsx';

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
