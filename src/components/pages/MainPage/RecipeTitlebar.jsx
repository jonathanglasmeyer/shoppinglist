import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {Titlebar} from 'widgets';

@Radium
export default class RecipeTitlebar extends ValidatedComponent {
  static propTypes = {

  }

  render() {

    return <Titlebar huge
      title='Incredible Mac ‘n’ Cheese, four ways' />;
  }

}
