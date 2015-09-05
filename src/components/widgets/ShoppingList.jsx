import React, {PropTypes, Component} from 'react';
import ParseComponent from 'parse-react/class';
import {connect} from 'react-redux';
import {Parse} from 'parse';
import ParseReact from 'parse-react';
import Radium from 'radium';
import {all as _all} from 'lodash/collection';
import {some as _some} from 'lodash/collection';

import {Snackbar} from 'material-ui';
import {Card, Spinner, List} from 'widgets';

import ShoppingListItem from './ShoppingList/ShoppingListItem.jsx';
import ShoppingListInput from './ShoppingList/ShoppingListInput.jsx';
import ShoppingListTitlebar from './ShoppingList/ShoppingListTitlebar.jsx';
import ShoppingListFooter from './ShoppingList/ShoppingListFooter.jsx';

import * as shoppinglistActions from 'ducks/shoppinglist';

const SNACKBAR_UNDO_CREATE = 'SNACKBAR_UNDO_CREATE';
const SNACKBAR_UNDO_CLEAN = 'SNACKBAR_UNDO_CLEAN';

@Radium
@connect((state) => ({items: state.shoppinglist}), shoppinglistActions)
export default class ShoppingList extends Component {
  static propTypes = {
    items: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const {items} = this.props;
    // const isLoading = !!this.pendingQueries().length;
    const isLoading = false;
    const isAnItemDone = _some(items, item => item.get && item.get('done'));
    // const itemsExist = items && !!items.length;
    const itemsExist = true;

    return <Card hasMinHeight>
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

      <List footerBig>

        <ShoppingListTitlebar
          itemsExist={itemsExist}
          allDone={::this._allDone()}
          onSetAllDone={::this._handleSetAllDone} />

        {!isLoading && <ShoppingListInput onSubmit={::this._handleAddItem}/>}

        {isLoading && <Spinner />}

        {!isLoading && (items || []).map((item, idx) =>
            <ShoppingListItem
              onSetDone={::this._handleSetDone}
              key={idx}
              item={item} />)}

      </List>

      <ShoppingListFooter
        isAnItemDone={isAnItemDone}
        onDeleteDone={::this._handleDeleteAllDone} />
    </Card>;
  }

  /**
   * returns: bool
   */
  _allDone() {
    return _all(this.props.items, item => item.get && item.get('done'));
  }

  _handleAddItem(name) {
    this.props.addItem({name: name.trim()});

    setTimeout(() => {
      this._notifyItemAdded(name);
    }, 100);
  }

  /**
   * item: the whole Parse item
   * done: bool
   */
  _handleSetDone(item, done) {
    this.props.setDoneItem({item, done});
    // ParseReact.Mutation.Set(item, {done}).dispatch();
  }

  _handleSetAllDone() {
    const done = !this._allDone();
    this.props.setAllDone({items: this.props.items, done});
  }

  _handleDeleteAllDone() {
    const doneItems = this.props.items.filter(item => item.get && item.get('done'));
    this.props.deleteAllDone({items: doneItems});

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

    this.props.addItems(this.cleanedItems.map(item => item.get('name')));
  }

  _handleUndoCreate() {
    this.refs[SNACKBAR_UNDO_CREATE].dismiss();
    ParseReact.Mutation.Destroy(this.lastCreatedItem).dispatch();
  }

}
