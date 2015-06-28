import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {Checkbox} from 'material-ui';
import {ListItem} from 'widgets';

const style = {
  fontSize: 20
};

@Radium
export default class ShoppingListTitlebar extends ValidatedComponent {
  static propTypes = {
    onSetAllDone: PropTypes.func, // it is required, but Radium sucks
    allDone: PropTypes.bool // dito.
  }

  render() {
    const {onSetAllDone, allDone} = this.props;

    return <ListItem clickable big onClick={onSetAllDone}>
      <Checkbox
        labelStyle={style}
        checked={allDone}
        label='Shoppinglist'/>
    </ListItem>;
  }

}
