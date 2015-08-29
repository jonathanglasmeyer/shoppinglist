import React, {PropTypes, Component} from 'react'; // eslint-disable-line no-unused-vars
import {connect} from 'react-redux';

import {ShoppingList} from 'widgets';

@connect((state) => ({items: state.shoppingListItems}))
export default class  extends Component {

  render() {
    const {items} = this.props;
    console.info('[ShoppingListController.jsx] ', this.props);
    console.info('[ShoppingListController.jsx] ', items);

    return <ShoppingList items={items} />;
  }

}
