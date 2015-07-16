import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {Styles} from 'material-ui';

import {SvgIcon} from 'widgets';

import * as colors from 'styles/colors';

export default class Checkbox extends ValidatedComponent {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool
  }

  render() {
    const {checked, disabled} = this.props;
    const icon = `checkbox-${checked ? 'marked' : 'blank'}`;
    let color = checked ? Styles.Colors.teal500 : undefined;
    if (disabled) {
      color = colors.GRAY_DISABLED_TEXT;
    }

    return <SvgIcon color={color} icon={icon} />;
  }

}
