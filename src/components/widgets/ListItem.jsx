import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import Radium from 'radium';
import {tappable} from 'utils';
import {ValidatedComponent} from 'utils';
import * as Color from 'styles/colors';
import {LIST_ITEM_HEIGHT, LIST_ITEM_HEIGHT_BIG} from 'styles/dimensions';

const borderStyle = `1px solid ${Color.GRAY_LIGHT}`;

const clickableStyle = {
  cursor: 'pointer',
  ':hover': {
    background: Color.GRAY_VERY_LIGHT
  }
};

const baseStyle = {
  height: LIST_ITEM_HEIGHT,
  width: '100%',
  cursor: 'default',
  listStyleType: 'none',
  padding: '0 16px',
  borderBottom: borderStyle,
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

    // modifiers
    noTouchColor: PropTypes.bool,
    borderTop: PropTypes.bool,
    big: PropTypes.bool,
    clickable: PropTypes.bool
  }

  render() {
    const {
      children,
      onClick,
      style,
      borderTop,
      big,
      clickable,
      noTouchColor
    } = this.props;

    const style_ = {
      ...baseStyle,
      ...style,
      ...(clickable ? clickableStyle : {}),
      ...(borderTop ? {borderTop: borderStyle} : {}),
      ...(big ? {height: LIST_ITEM_HEIGHT_BIG} : {})
    };


    const activeStyle = {background: Color.GREEN_HOVER}; // for tapping
    return tappable({
      noTouchColor,
      component: 'li',
      name: 'ListItemTappable',
      onClick,
      style: style_,
      activeStyle,
      children
    });
  }

}
