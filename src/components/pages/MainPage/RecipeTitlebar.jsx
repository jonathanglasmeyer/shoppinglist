import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {Titlebar} from 'widgets';

@Radium
export default class RecipeTitlebar extends ValidatedComponent {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    const {title} = this.props;

    return <Titlebar huge
      title={title} />;
  }

}
