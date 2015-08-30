import React, {Component} from 'react';
import App from 'components/App.jsx';

// import {Router, Route} from 'react-router';
// import {history} from 'react-router/lib/HashHistory';

import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools

// https://github.com/gaearon/redux-devtools/issues/63
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/folder_name';

import {Provider} from 'react-redux';
import rootReducer from './reducers/index.js';
// import {reduxRouteComponent} from 'redux-react-router';

// import {RecipeDetailPage} from 'pages';

require('./styles/global.less');

const injectTapEventPlugin = require('react-tap-event-plugin');
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


// React.render((
//   <Router history={history}>
//     <Route path='/' component={App}>
//       <Route path='recipe/:id' component={RecipeDetailPage} />
//     </Route>
//   </Router>
// ), document.getElementById('content'));

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

class Root extends Component {
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

React.render(<Root />, document.getElementById('content'));
