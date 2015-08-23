import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import * as size from 'styles/sizes';
import * as media from 'styles/mediaqueries';

const styles = {
  base: {
    width: '100%',

    minWidth: size.CARD_WIDTH,
    maxWidth: size.CARD_WIDTH,

    [media.BELOW_380_WIDTH]: {
      minWidth: '100%'
    },

    borderRadius: 2,
    background: '#fff',
    position: 'relative', // absolutely position Footer at bottom
    flex: 1,
             // hor vert blur spread
    boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: 24,

    [media.RICH_EXPERIENCE]: {
      marginRight: size.PAGE_MARGIN, // for being position in the grid
    }
  },
  minHeight: {
    minHeight: '75vh',
    [media.RICH_EXPERIENCE]: {
      // minHeight: 'calc(100vh - 26px)',
      // shopping list shoudn't grow in its fixed left
      maxWidth: size.CARD_WIDTH,
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
    onClick: PropTypes.func,
    hasMinHeight: PropTypes.bool,
    fullWidth: PropTypes.bool
  }

  render() {
    const {children, onClick, hasMinHeight, fullWidth} = this.props;

    const style = [
      styles.base,
      fullWidth && styles.fullWidth,
      hasMinHeight && styles.minHeight
    ];

    return <div style={style} id='Card' onClick={onClick}>
      {children}
    </div>;
  }

}
