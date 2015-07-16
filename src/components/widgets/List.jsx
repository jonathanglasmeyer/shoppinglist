import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {LIST_ITEM_HEIGHT} from 'styles/dimensions';

const style = {
  marginBottom: LIST_ITEM_HEIGHT + 8
};

@Radium
export default class List extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.node
  }

  render() {

    return <ul style={style}>
      {this.props.children}
    </ul>;
  }

}
