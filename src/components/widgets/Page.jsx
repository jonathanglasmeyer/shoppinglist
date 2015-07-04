import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {PAGE_WIDTH} from 'styles/dimensions';
import {BELOW_380_WIDTH} from 'styles/sizes';

const style = {
  width: '95%',
  maxWidth: PAGE_WIDTH,
  borderRadius: 2,
  minHeight: '100%',
  background: '#fff',
  flex: 1,
  position: 'relative',
           // hor vert blur spread
  boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.1)',
  marginTop: 8,

  [BELOW_380_WIDTH]: {
    marginTop: 24
  },
  marginBottom: 24
};


@Radium
export default class Page extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const {children} = this.props;

    return <div style={style}>
      {children}
    </div>;
  }

}
