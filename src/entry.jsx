import React from 'react';
import App from 'components/App.jsx';
import {Parse} from 'parse';

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

React.render(<App />, document.getElementById('content'));
