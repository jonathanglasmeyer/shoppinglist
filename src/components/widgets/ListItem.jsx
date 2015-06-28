import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

const baseStyle = {
  height: 48
};

export default class ListItem extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object
  }

  render() {
    const {children, style} = this.props;
    const style_ = style ? {...baseStyle, ...style} : baseStyle;


    return <li style={style_}>
      {children}
    </li>;
  }

}
