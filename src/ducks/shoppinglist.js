// import {ADD_item, DELETE_item, EDIT_item, COMPLETE_item, COMPLETE_ALL, CLEAR_COMPLETED} from 'constants/ActionTypes';
import {createAction} from 'redux-actions';
import * as Api from 'api';

const ADD = 'shoppinglist/ADD';
const FETCH = 'shoppinglist/FETCH';
const ADD_LOCAL = 'shoppinglist/ADD_LOCAL';
const ADD_REMOTE = 'shoppinglist/ADD_REMOTE';

import {max as _max} from 'lodash';

export const fetchItems = createAction(FETCH, Api.fetchAll);
export const addLocalItem = createAction(ADD_LOCAL);

export function addItem(text) {
  return (dispatch) => {
    dispatch(addLocalItem(text));
    Api.save(text).then(() => dispatch(fetchItems()));
  }
}

export default function reducer(state=[], action) {
  switch (action.type) {

  case ADD_REMOTE: {
    return state;
  }

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
