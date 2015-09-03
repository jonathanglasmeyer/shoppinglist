// import {ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED} from 'constants/ActionTypes';
import {createAction} from 'redux-actions';
import * as actions from 'constants/ActionTypes';

const initialState = [];

export default function shoppingListItems(state = initialState, action) {
  switch (action.type) {

  // case actions.ADD_SHOPPINGLIST_ITEM: {
  //   const items = action.payload;
  //   const itemsPlain = items.map(item => item.toPlainObject());
  //   return itemsPlain;
  // }

  case actions.FETCH_SHOPPINGLIST_ITEMS: {
    console.info('[shoppinglistItems.js] ', 'reduce fetch');
    const items = action.payload;
    // const itemsPlain = items.map(item => item.toPlainObject);
    // return itemsPlain;
    return ['a'];
  }
    // return [{
    //   id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
    //   done: false,
    //   name: action.payload
    // }, ...state];

  // case DELETE_TODO:
  //   return state.filter(todo =>
  //     todo.id !== action.id
  //   );

  // case EDIT_TODO:
  //   return state.map(todo =>
  //     todo.id === action.id ?
  //       Object.assign({}, todo, { text: action.text }) :
  //       todo
  //   );

  // case COMPLETE_TODO:
  //   return state.map(todo =>
  //     todo.id === action.id ?
  //       Object.assign({}, todo, { completed: !todo.completed }) :
  //       todo
  //   );

  // case COMPLETE_ALL:
  //   const areAllMarked = state.every(todo => todo.completed);
  //   return state.map(todo => Object.assign({}, todo, {
  //     completed: !areAllMarked
  //   }));

  // case CLEAR_COMPLETED:
  //   return state.filter(todo => todo.completed === false);

  default:
    return state;
  }
}
