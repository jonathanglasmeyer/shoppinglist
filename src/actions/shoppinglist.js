import * as actions from '../constants/ActionTypes';
import * as classes from '../constants';
import {createAction} from 'redux-actions';
import Parse from 'utils/myParse';

const ShoppingListItem = Parse.Object.extend(classes.SHOPPINGLIST_ITEM);

// this returns an action creator. the payload of the action is the promise _fetchAll.
export const fetchAllItems = createAction(actions.FETCH_SHOPPINGLIST_ITEMS, _fetchAll);

export function addItem(text) {
  return _save(text).then(fetchAllItems);
}

function _fetchAll() {
  return (new Parse.Query(classes.SHOPPINGLIST_ITEM)
      .equalTo('user', Parse.User.current())
      .descending('updatedAt')).find();
}

function _save(itemText) {
  return (new ShoppingListItem).save({
    name: itemText.trim(),
    done: false,
    user: Parse.User.current()
  })
}
