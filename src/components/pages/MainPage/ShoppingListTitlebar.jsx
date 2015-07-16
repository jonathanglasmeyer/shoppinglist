import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {Checkbox, Titlebar} from 'widgets';

@Radium
export default class ShoppingListTitlebar extends ValidatedComponent {
  static propTypes = {
    onSetAllDone: PropTypes.func.isRequired,
    allDone: PropTypes.bool.isRequired,
    itemsExist: PropTypes.bool.isRequired,
  }

  render() {
    const {onSetAllDone, allDone, itemsExist} = this.props;

    return <Titlebar
      onClick={onSetAllDone}
      title='Shopping List'
      left={
        <Checkbox
          checked={itemsExist && allDone}
          disabled={!itemsExist} /> } />;
  }

}
