import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {AppBar} from 'material-ui';

// <AppBar title='Title' iconClassNameRight="muidocs-icon-navigation-expand-more"/>

export default class NavigationBar extends ValidatedComponent {
  static propTypes = {

  }

  render() {

    return <AppBar title='Shoppinglist' />;
  }

}

