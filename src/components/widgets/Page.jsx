import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {BELOW_380_WIDTH, RICH_EXPERIENCE} from 'styles/sizes';

console.info('[Page.jsx] ', RICH_EXPERIENCE);
const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '95%',
  marginTop: 8,

  [BELOW_380_WIDTH]: {
    marginTop: 24
  },

  [RICH_EXPERIENCE]: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 32,
    marginLeft: 32
    // width: '80%',
  }
};

@Radium
export default class Page extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {

    return <div style={style}>
      {this.props.children}
    </div>;
  }

}
