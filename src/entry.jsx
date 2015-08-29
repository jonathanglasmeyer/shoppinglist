import React, {Component} from 'react';
import App from 'components/App.jsx';
import {Parse} from 'parse';

// import {Router, Route} from 'react-router';
// import {history} from 'react-router/lib/HashHistory';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index.js';
// import {reduxRouteComponent} from 'redux-react-router';

// import {RecipeDetailPage} from 'pages';
// console.info('[entry.jsx] ', rootReducer);

require('./styles/global.less');

const injectTapEventPlugin = require('react-tap-event-plugin');
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import {PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_ID} from '../config/parse.js';

// Insert your app's keys here:
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_ID);

// React.render((
//   <Router history={history}>
//     <Route path='/' component={App}>
//       <Route path='recipe/:id' component={RecipeDetailPage} />
//     </Route>
//   </Router>
// ), document.getElementById('content'));

const store = createStore(rootReducer);

class Root extends Component {
  render() {
    return <Provider store={store}>
      {() => <App />}
    </Provider>;
  }
}

React.render(<Root />, document.getElementById('content'));
