import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {Styles} from 'material-ui';

import {SvgIcon} from 'widgets';

export default class Checkbox extends ValidatedComponent {
  static propTypes = {
    checked: PropTypes.bool.isRequired
  }

  render() {
    const {checked} = this.props;
    const icon = `checkbox-${checked ? 'marked' : 'blank'}`;
    const color = checked ? Styles.Colors.teal500 : undefined;

    return <SvgIcon color={color} icon={icon} />;
  }

}
