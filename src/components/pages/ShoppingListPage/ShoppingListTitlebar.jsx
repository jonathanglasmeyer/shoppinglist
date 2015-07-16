import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {Checkbox, ListItem} from 'widgets';

const titleStyle = {
  fontSize: 22,
  fontFamily: 'Montserrat, sans-serif', // not sure ...
  fontWeight: 400
};

@Radium
export default class ShoppingListTitlebar extends ValidatedComponent {
  static propTypes = {
    onSetAllDone: PropTypes.func.isRequired,
    allDone: PropTypes.bool.isRequired,
    itemsExist: PropTypes.bool.isRequired,
  }

  render() {
    const {onSetAllDone, allDone, itemsExist} = this.props;

    return <ListItem
      key={0}
      big
      onClick={onSetAllDone}
      clickable
      left={<Checkbox checked={itemsExist && allDone} disabled={!itemsExist} />}>

      <h1 style={titleStyle}>Shopping List</h1>

    </ListItem>;
  }

}
