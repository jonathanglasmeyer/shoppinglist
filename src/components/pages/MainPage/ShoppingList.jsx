import React from 'react';
import ParseComponent from 'parse-react/class';
import {Parse} from 'parse';
import ParseReact from 'parse-react';
import Radium from 'radium';
import {all as _all} from 'lodash/collection';
import {some as _some} from 'lodash/collection';

import {Snackbar} from 'material-ui';
import {Spinner, List} from 'widgets';

import ShoppingListItem from './ShoppingListItem.jsx';
import ShoppingListInput from './ShoppingListInput.jsx';
import ShoppingListTitlebar from './ShoppingListTitlebar.jsx';
import ShoppingListFooter from './ShoppingListFooter.jsx';

import {SHOPPINGLIST_ITEM} from 'constants';


const SNACKBAR_UNDO_CREATE = 'SNACKBAR_UNDO_CREATE';
const SNACKBAR_UNDO_CLEAN = 'SNACKBAR_UNDO_CLEAN';

const style = {
  minHeight: '100%'
  // display: 'flex',
  // flexDirection: 'column'
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
    const itemsExist = !!this.data.items.length;

    return <div style={style}>
      <Snackbar
        ref={SNACKBAR_UNDO_CREATE}
        action='undo'
        onActionTouchTap={::this._handleUndoCreate}
        message={this.name ? `Added ${this.name}` : ''} />

      <Snackbar
        ref={SNACKBAR_UNDO_CLEAN}
        action='undo'
        onActionTouchTap={::this._handleUndoClean}
        message={'Cleaned up done items'} />

      <List>

        <ShoppingListTitlebar
          itemsExist={itemsExist}
          allDone={::this._allDone()}
          onSetAllDone={::this._handleSetAllDone} />

        {!isLoading && <ShoppingListInput onSubmit={::this._handleAddItem}/>}

        {isLoading && <Spinner />}

        {!isLoading && this.data.items.map(item =>
            <ShoppingListItem
              onSetDone={::this._handleSetDone}
              key={item.id}
              item={item} />)}

      </List>

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

  _showSnackbar(ref) {
    const snackbar = this.refs[ref];
    snackbar.show();

    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      snackbar.dismiss();
    }, 5000);
  }

  _notifyItemAdded(name) {
    this.name = name;
    this._showSnackbar(SNACKBAR_UNDO_CREATE);
  }

  _notifyItemsCleaned() {
    this._showSnackbar(SNACKBAR_UNDO_CLEAN);
  }

  _handleUndoClean() {
    this.refs[SNACKBAR_UNDO_CLEAN].dismiss();

    this.cleanedItems.map(({name, done, user}) => {
      ParseReact.Mutation.Create(SHOPPINGLIST_ITEM, {
        name, done, user
      }).dispatch();
    });
  }

  _handleUndoCreate() {
    this.refs[SNACKBAR_UNDO_CREATE].dismiss();
    ParseReact.Mutation.Destroy(this.lastCreatedItem).dispatch();
  }

}
