import React, {PropTypes} from 'react';
import {ValidatedComponent} from 'utils';

const style = {
  width: 24,
  height: 24,
};

export default class SvgIcon extends ValidatedComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string
  }

  render() {
    const {color='#000', icon} = this.props;

    const rawIcon = require(`assets/${icon}.svg`);
    return <svg
      fill={color}
      style={style} dangerouslySetInnerHTML= {{__html: rawIcon}} />;
  }
}
