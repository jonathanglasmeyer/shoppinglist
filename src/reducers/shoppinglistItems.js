// import {ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED} from 'constants/ActionTypes';
import * as actions from 'constants/ActionTypes';

const initialState = [{
  id: 0,
  done: false,
  name: 'Foo'
}, {
  id: 1,
  done: true,
  name: 'Bar'
}
];

export default function shoppingListItems(state = initialState, action) {
  switch (action.type) {
  case actions.ADD_SHOPPINGLIST_ITEM:
    return [{
      id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
      done: true,
      text: action.text
    }, ...state];

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
