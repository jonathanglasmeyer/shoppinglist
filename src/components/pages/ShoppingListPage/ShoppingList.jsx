import React from 'react';
import ParseComponent from 'parse-react/class';
import {Parse} from 'parse';
import ParseReact from 'parse-react';

import ShoppingListItem from './ShoppingListItem.jsx';
import ShoppingListInput from './ShoppingListInput.jsx';
import ShoppingListTitlebar from './ShoppingListTitlebar.jsx';

import {SHOPPINGLIST_ITEM} from 'constants';

export default class ShoppingList extends ParseComponent {
  static propTypes = {

  }

  observe() {
    return {
      items: new Parse.Query(SHOPPINGLIST_ITEM)
        .equalTo('user', Parse.User.current())
        .ascending('updatedAt')
    };
  }

  render() {

    return <div>
      <ShoppingListTitlebar />
      <ShoppingListInput onSubmit={::this._onAddItem}/>
      <ul>
        {this.data.items.map(item =>
            <ShoppingListItem
              onSetDone={::this._onSetDone}
              key={item.id}
              item={item} />)}
      </ul>
    </div>;
  }

  _onAddItem(name) {

    ParseReact.Mutation.Create(SHOPPINGLIST_ITEM, {
      name,
      done: false,
      user: Parse.User.current().toPlainObject()
    }).dispatch();
  }

  /**
   * item: the whole parse item
   * done: bool
   */
  _onSetDone(item, done) {
    ParseReact.Mutation.Set(item, {done}).dispatch();
  }

}
