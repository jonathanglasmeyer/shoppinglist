import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import Radium from 'radium';
import {ValidatedComponent} from 'utils';
import {ListItem} from 'widgets';

const style = {
  position: 'absolute',
  bottom: 0,
  left: 0
};

@Radium
export default class ShoppingListFooter extends ValidatedComponent {
  static propTypes = {

  }

  render() {

    return <ListItem style={style}>
      footer
    </ListItem>;
  }

}
