import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {PAGE_WIDTH} from 'styles/dimensions';
import {BELOW_380_WIDTH, RICH_EXPERIENCE} from 'styles/sizes';

const styles = {
  base: {
    width: '100%',

    minWidth: PAGE_WIDTH,
    maxWidth: PAGE_WIDTH,

    borderRadius: 2,
    background: '#fff',
    position: 'relative', // absolutely position Footer at bottom
    flex: 1,
             // hor vert blur spread
    boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: 24,

    [RICH_EXPERIENCE]: {
      marginRight: 24
    }
  },
  minHeight: {
    minHeight: '75vh',
    [RICH_EXPERIENCE]: {
      minHeight: '90vh',
      // shopping list shoudn't grow in its fixed left
      maxWidth: PAGE_WIDTH, 
    }
  },

  fullWidth: {
    minWidth: '100%'
  }
};


@Radium
export default class Card extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,

    hasMinHeight: PropTypes.bool,
    fullWidth: PropTypes.bool
  }

  render() {
    const {children, hasMinHeight, fullWidth} = this.props;

    const style = [
      styles.base,
      fullWidth && styles.fullWidth,
      hasMinHeight && styles.minHeight
    ];

    return <div style={style}>
      {children}
    </div>;
  }

}
