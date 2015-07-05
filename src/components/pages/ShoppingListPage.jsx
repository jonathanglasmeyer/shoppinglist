import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

import ShoppingList from './ShoppingListPage/ShoppingList.jsx';

import {Page} from 'widgets';

export default class ShoppingListPage extends ValidatedComponent {
  static propTypes = {
    onNotifyItemAdded: PropTypes.func.isRequired
  }

  render() {

    return <Page>
      <ShoppingList onNotifyItemAdded={this.props.onNotifyItemAdded}/>
    </Page>;
  }

}


