import Parse from 'utils/myParse';
export const SHOPPINGLIST_ITEM = 'SHOPPINGLIST_ITEM';
// export const RECIPE = 'RECIPE';

const ShoppingListItem = Parse.Object.extend(SHOPPINGLIST_ITEM);

export function fetchAll() {
  return (new Parse.Query(SHOPPINGLIST_ITEM)
      .equalTo('user', Parse.User.current())
      .descending('updatedAt')).find();
}

export function save(itemText) {
  return (new ShoppingListItem).save({
    name: itemText.trim(),
    done: false,
    user: Parse.User.current()
  })
}
