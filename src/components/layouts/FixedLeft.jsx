import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

import {PAGE_WIDTH} from 'styles/dimensions';

const style = {
  position: 'fixed',
  top: 0,
  left: 0,
  margin: 32,
  height: '100vh',
  width: PAGE_WIDTH + 32,
  overflowY: 'scroll'
}

export default class FixedLeft extends ValidatedComponent {
  static propTypes = {
    // children: PropTypes.node.isRequired
  }

  render() {

    return <div style={style}>
      {this.props.children}
    </div>;
  }

}
