// import {ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED} from 'constants/ActionTypes';
import {createAction} from 'redux-actions';
import {fetchAll, save} from 'api';

const ADD = 'shoppinglist/shoppinglist/ADD';
const FETCH = 'shoppinglist/shoppinglist/FETCH';

export const fetchAllItems = createAction(FETCH, fetchAll);
// export const addItem       = createAction(ADD, fetchAll);

export function addItem(text) {
  return save(text).then(fetchAllItems);
}

export default function reducer(state=[], action) {
  switch (action.type) {

  case FETCH: {
    const items = action.payload;
    const itemsPlain = items.map(item => item.toPlainObject());
    return itemsPlain;
  }

  default:
    return state;
  }
}
