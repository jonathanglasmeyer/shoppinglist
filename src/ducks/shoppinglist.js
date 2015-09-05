// import {ADD_item, DELETE_item, EDIT_item, COMPLETE_item, COMPLETE_ALL, CLEAR_COMPLETED} from 'constants/ActionTypes';
import {createAction} from 'redux-actions';
import * as Api from 'api';

const ADD = 'shoppinglist/ADD';
const FETCH = 'shoppinglist/FETCH';
const ADD_LOCAL = 'shoppinglist/ADD_LOCAL';
const TOGGLE_LOCAL = 'shoppinglist/TOGGLE_LOCAL';

import {max as _max} from 'lodash';

export const fetchItems = createAction(FETCH, Api.fetchAll);
export const addLocalItem = createAction(ADD_LOCAL);
export const toggleLocalItem = createAction(TOGGLE_LOCAL);

/**
 * - execute an optimistic update, 
 * - then make an api call, 
 * - then replace temporary app state 
 */
function optimistically(dispatch, optimisticActionCreator, apiCall) {
  return (dispatch) => {
    dispatch(optimisticActionCreator);
    apiCall.then(() => dispatch(fetchItems()));
  }
}

export const addItem = (text) => optimistically(dispatch, addLocalItem(text), Api.save(text));

export function toggleItem(id) {
  return (dispatch) => {
    dispatch(toggleLocalItem(text));
    Api.save(text).then(() => dispatch(fetchItems()));
  }
}

export default function reducer(state=[], action) {
  switch (action.type) {

  case ADD_LOCAL: {
    return [{
      name: action.payload,
      temporary: true,
      done: false,
    }, ...state];
  }

  case FETCH: {
    const items = action.payload;
    const itemsPlain = items.map(item => item.toPlainObject());
    return itemsPlain;
  }

  default:
    return state;
  }
}
