import React, {PropTypes} from 'react';
import ParseComponent from 'parse-react/class';
import {Parse} from 'parse';
import ParseReact from 'parse-react';
import Radium from 'radium';
import {all as _all} from 'lodash/collection';

import ShoppingListItem from './ShoppingListItem.jsx';
import ShoppingListInput from './ShoppingListInput.jsx';
import ShoppingListTitlebar from './ShoppingListTitlebar.jsx';
import ShoppingListFooter from './ShoppingListFooter.jsx';

import {SHOPPINGLIST_ITEM} from 'constants';

import {LIST_ITEM_HEIGHT} from 'styles/dimensions';

const style = {
  minHeight: '100%'
  // display: 'flex',
  // flexDirection: 'column'
};

const listStyle = {
  flex: '1 0 auto',
  marginBottom: LIST_ITEM_HEIGHT + 8
};

@Radium
export default class ShoppingList extends ParseComponent {
  static propTypes = {
    onNotifyItemAdded: PropTypes.func.isRequired
  }


  observe() {
    return {
      items: new Parse.Query(SHOPPINGLIST_ITEM)
        .equalTo('user', Parse.User.current())
        .ascending('updatedAt')
    };
  }

  render() {

    return <div style={style}>
      <ul style={listStyle}>
        <ShoppingListTitlebar
          allDone={::this._allDone()}
          onSetAllDone={::this._handleSetAllDone} />
        <ShoppingListInput onSubmit={::this._handleAddItem}/>
        {this.data.items.map(item =>
            <ShoppingListItem
              onSetDone={::this._handleSetDone}
              key={item.id}
              item={item} />)}
      </ul>
      <ShoppingListFooter onDeleteDone={::this._handleDeleteAllDone}/>
    </div>;
  }

  /**
   * returns: bool
   */
  _allDone() {
    return _all(this.data.items, item => item.done);
  }

  _handleAddItem(name) {

    ParseReact.Mutation.Create(SHOPPINGLIST_ITEM, {
      name,
      done: false,
      user: Parse.User.current().toPlainObject()
    }).dispatch();

    setTimeout(() => {
      this.props.onNotifyItemAdded(name);
    }, 100);
  }

  /**
   * item: the whole parse item
   * done: bool
   */
  _handleSetDone(item, done) {
    ParseReact.Mutation.Set(item, {done}).dispatch();
  }

  _handleSetAllDone() {

    const bool = !this._allDone();

    this.data.items.forEach(item => {
      ParseReact.Mutation.Set(item, {done: bool}).dispatch();
    });
  }

  _handleDeleteAllDone() {
    const doneItems = this.data.items.filter(item => item.done);
    doneItems.forEach(item => ParseReact.Mutation.Destroy(item).dispatch());
  }

}
