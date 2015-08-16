import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import * as query from 'styles/mediaqueries';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',
  marginTop: 24,
  padding: '0 16px'

};

@Radium
export default class SingleColumn extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {

    return <div style={style} id='SingleColumn'>
      {this.props.children}
    </div>;
  }

}
