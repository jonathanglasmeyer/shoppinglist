import {Parse} from 'parse';

import {PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_ID} from 'config/parse';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_ID);
export default Parse;
