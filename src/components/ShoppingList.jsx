import React from 'react';
import ParseComponent from 'parse-react/class';
import {Parse} from 'parse';
import ParseReact from 'parse-react';
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
      <form onSubmit={::this._onAddItem}>
        <input type='text' ref='input' />
        <button type='submit'>Add Item</button>
      </form>
      <ul>
        {this.data.items.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>;
  }

  _onAddItem(e) {
    e.preventDefault();
    const inputField = React.findDOMNode(this.refs.input);
    const input = inputField.value;

    inputField.value = '';

    if (!input) {
      return;
    }

    console.info('[ShoppingList.jsx] ', SHOPPINGLIST_ITEM);

    ParseReact.Mutation.Create(SHOPPINGLIST_ITEM, {
      name: input,
      done: false,
      user: Parse.User.current().toPlainObject()
    }).dispatch();
  }

}
