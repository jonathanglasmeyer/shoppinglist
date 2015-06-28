import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import Radium from 'radium';
import {ValidatedComponent} from 'utils';
import {GRAY_LIGHT} from 'styles/colors';
import {LIST_ITEM_HEIGHT, LIST_ITEM_HEIGHT_BIG} from 'styles/dimensions';

const borderStyle = `1px solid ${GRAY_LIGHT}`;

const baseStyle = {
  height: LIST_ITEM_HEIGHT,
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
    borderTop: PropTypes.bool,
    big: PropTypes.bool
  }

  render() {
    const {children, style, borderTop, big} = this.props;
    const style_ = [
      baseStyle,
      style,
      borderTop && {borderTop: borderStyle},
      big && {height: LIST_ITEM_HEIGHT_BIG}
    ];

    return <li style={style_}>
      {children}
    </li>;
  }

}
