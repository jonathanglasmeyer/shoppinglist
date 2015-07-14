require('styles/spinner.less');

import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars

import {ValidatedComponent} from 'utils';

import {ListItem} from 'widgets';

export default class SpinnerListItem extends ValidatedComponent {

  render() {
    return <ListItem centerHorizontally noBottomBorder>
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </ListItem>;
  }

}
