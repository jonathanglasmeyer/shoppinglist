import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

import ShoppingList from './MainPage/ShoppingList.jsx';

import {Card, Page, ListInputItem} from 'widgets';

import Recipe from './MainPage/Recipe.jsx';

export default class MainPage extends ValidatedComponent {

  render() {

    return <Page>
      <Card hasMinHeight>
        <ShoppingList onNotifyItemAdded={this.props.onNotifyItemAdded}/>
      </Card>

      <Card>
      <ListInputItem iconName='search' placeholder='Find Recipe' />
      </Card>

      <Card>
        <Recipe />
      </Card>
    </Page>;
  }

}


