// import {ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED} from 'constants/ActionTypes';
import {createAction} from 'redux-actions';
import {fetchAll, save} from 'api';

const ADD = 'shoppinglist/ADD';
const FETCH = 'shoppinglist/FETCH';
const ADD_LOCAL = 'shoppinglist/ADD_LOCAL';
const ADD_REMOTE = 'shoppinglist/ADD_REMOTE';

export const fetchAllItems = createAction(FETCH, fetchAll);
export const addLocalItem = createAction(ADD_LOCAL);
export const addRemoteItem = createAction(ADD_REMOTE, save);

export function addItem(text) {
  return (dispatch) => {
    dispatch(addLocalItem(text));
    console.info('[shoppinglist.js] ', 'done');
    dispatch(addRemoteItem(text));
  }
}

// export function addItem(text) {
//   return save(text).then(fetchAllItems);
// }

export default function reducer(state=[], action) {
  switch (action.type) {

  case ADD_REMOTE: {
    console.info('[shoppinglist.js reduce: add remote]')
    return state;
  }

  case ADD_LOCAL: {
    console.info('[shoppinglist.js] ', 'add local');
    return [{name: action.payload, done: false}, ...state];
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
