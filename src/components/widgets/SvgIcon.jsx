import React, {PropTypes} from 'react';
import {ValidatedComponent} from 'utils';
import * as colors from 'styles/colors';

const style = {
  width: 24,
  height: 24
};

export default class SvgIcon extends ValidatedComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string
  }

  render() {
    const {color=colors.GRAY_SECONDARY_TEXT, icon} = this.props;

    const rawIcon = require(`assets/${icon}.svg`);
    return <svg
      fill={color}
      style={style} dangerouslySetInnerHTML= {{__html: rawIcon}} />;
  }
}
