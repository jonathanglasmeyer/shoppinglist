import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import Radium from 'radium';
// import {tappable} from 'utils';
import {ValidatedComponent} from 'utils';
import * as Color from 'styles/colors';
import {LIST_ITEM_HEIGHT, LIST_ITEM_HEIGHT_BIG} from 'styles/dimensions';
import * as sizes from 'styles/sizes';

const borderStyle = `1px solid ${Color.GRAY_LIGHT}`;


const clickableStyle = {
  cursor: 'pointer',
  [sizes.DESKTOP]: { // this is just a stupid shortcut (would like to have the ability
                     // to question if touch is available. maybe in css4...
    ':hover': {
      background: Color.GRAY_VERY_LIGHT
    }
  }
};

const leftItemStyle = {
  minWidth: 56,
  height: '100%',
  display: 'flex',
  alignItems: 'center'
};

const baseStyle = {
  height: LIST_ITEM_HEIGHT,
  width: '100%',
  cursor: 'default',
  listStyleType: 'none',
  padding: '0 16px',
  listStylePosition: 'inside',
  display: 'flex',
  alignItems: 'center'
};

@Radium
export default class ListItem extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,

    onClick: PropTypes.func,

    left: PropTypes.node,

    // modifiers
    borderTop: PropTypes.bool,
    big: PropTypes.bool,
    clickable: PropTypes.bool,
    centerHorizontally: PropTypes.bool,
    pullRight: PropTypes.bool,
    noBottomBorder: PropTypes.bool
  }

  render() {
    const {
      children,
      left,
      onClick,
      style,
      borderTop,
      big,
      clickable,
      centerHorizontally,
      pullRight,
      noBottomBorder
    } = this.props;

    const style_ = [
      baseStyle,
      style,

      clickable && clickableStyle,
      borderTop && {borderTop: borderStyle},
      centerHorizontally && {justifyContent: 'center'},
      pullRight && {justifyContent: 'flex-end'},
      big && {height: LIST_ITEM_HEIGHT_BIG},
      !noBottomBorder && {borderBottom: borderStyle}
    ];

    return <li style={style_} onClick={onClick}>
      {left && <div style={leftItemStyle}>{left}</div>}
      {children}
    </li>;

  }

}

    // return tappable({
    //   noTouchColor,
    //   component: 'li',
    //   name: 'ListItemTappable',
    //   onClick,
    //   style: style_,
    //   activeStyle,
    //   children
    // });
