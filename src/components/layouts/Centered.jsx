import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

const style = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
};

import Radium from 'radium';

@Radium
export default class Centered extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {

    return <div style={style}>
      {this.props.children}
    </div>;
  }

}
