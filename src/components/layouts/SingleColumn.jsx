import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import * as query from 'styles/mediaqueries';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '95%',
  marginTop: 8,

  [query.BELOW_380_WIDTH]: {
    marginTop: 24
  },

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
