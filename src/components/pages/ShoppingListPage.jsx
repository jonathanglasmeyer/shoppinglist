import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

import ShoppingList from './ShoppingListPage/ShoppingList.jsx';

export default class ShoppingListPage extends ValidatedComponent {
  static propTypes = {

  }

  render() {

    return <div>
      <ShoppingList />
    </div>;
  }

}
