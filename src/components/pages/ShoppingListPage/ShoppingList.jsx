import React from 'react';
import ParseComponent from 'parse-react/class';
import {Parse} from 'parse';
import ParseReact from 'parse-react';
import Radium from 'radium';
import {all as _all} from 'lodash/collection';
import {some as _some} from 'lodash/collection';

import {Snackbar} from 'material-ui';
import {SpinnerListItem} from 'widgets';

import ShoppingListItem from './ShoppingListItem.jsx';
import ShoppingListInput from './ShoppingListInput.jsx';
import ShoppingListTitlebar from './ShoppingListTitlebar.jsx';
import ShoppingListFooter from './ShoppingListFooter.jsx';

import {SHOPPINGLIST_ITEM} from 'constants';

import {LIST_ITEM_HEIGHT} from 'styles/dimensions';

const ACTION_UNDO_CREATE_ITEM = 'ACTION_UNDO_CREATE_ITEM';
const ACTION_UNDO_CLEAN_ITEMS = 'ACTION_UNDO_CLEAN_ITEMS';

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

  observe() {
    return {
      items: new Parse.Query(SHOPPINGLIST_ITEM)
        .equalTo('user', Parse.User.current())
        .ascending('updatedAt')
    };
  }

  render() {
    const isLoading = !!this.pendingQueries().length;
    const isAnItemDone = _some(this.data.items, item => item.done);

    return <div style={style}>
      <Snackbar
        ref='snackbar'
        action='undo'
        onActionTouchTap={::this._snackbarExecuteAction}
        message={this.snackbarMessage || ''} />

      <ul style={listStyle}>

        <ShoppingListTitlebar
          allDone={::this._allDone()}
          onSetAllDone={::this._handleSetAllDone} />

        <ShoppingListInput onSubmit={::this._handleAddItem}/>

        {isLoading && <SpinnerListItem />}

        {this.data.items.map(item =>
            <ShoppingListItem
              onSetDone={::this._handleSetDone}
              key={item.id}
              item={item} />)}

      </ul>

      <ShoppingListFooter
        isAnItemDone={isAnItemDone}
        onDeleteDone={::this._handleDeleteAllDone} />
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
      name: name.trim(),
      done: false,
      user: Parse.User.current().toPlainObject()
    }).dispatch().then(item => {
      this.lastCreatedItem = item;
    });

    setTimeout(() => {
      this._notifyItemAdded(name);
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

    this.cleanedItems = doneItems;
    this._notifyItemsCleaned();
  }

  _showSnackbar() {
    this.refs.snackbar.show();
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.refs.snackbar.dismiss();
    }, 5000);
  }

  _notifyItemAdded(name) {
    this.setState({name});
    this.snackbarMessage = `Added ${this.state.name}`;
    this.snackbarCurrentAction = ACTION_UNDO_CREATE_ITEM;
    this._showSnackbar();
  }

  _notifyItemsCleaned() {
    this.snackbarCurrentAction = ACTION_UNDO_CLEAN_ITEMS;
    this.snackbarMessage = 'Cleaned up done items';
    this._showSnackbar();
  }

  _snackbarExecuteAction() {
    if (this.snackbarCurrentAction === ACTION_UNDO_CREATE_ITEM) {
      this._handleUndoCreate();
    } else {
      this._handleUndoClean();
    }
  }

  _handleUndoClean() {
    this.cleanedItems.map(({name, done, user}) => {
      ParseReact.Mutation.Create(SHOPPINGLIST_ITEM, {
        name, done, user
      }).dispatch();
    });
  }

  _handleUndoCreate() {
    ParseReact.Mutation.Destroy(this.lastCreatedItem).dispatch();
  }

}
