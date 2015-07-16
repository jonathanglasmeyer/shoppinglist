import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {PAGE_WIDTH} from 'styles/dimensions';

const base = {
  width: '100%',
  maxWidth: PAGE_WIDTH,
  borderRadius: 2,
  // minHeight: '100%',
  background: '#fff',
  position: 'relative', // absolutely position Footer at bottom
  flex: 1,
           // hor vert blur spread
  boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.1)',
  marginBottom: 24
};


@Radium
export default class Card extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,

    hasMinHeight: PropTypes.bool
  }

  render() {
    const {children, hasMinHeight} = this.props;

    const style = [
      base,
      hasMinHeight && {minHeight: '75vh'}
    ];

    return <div style={style}>
      {children}
    </div>;
  }

}
