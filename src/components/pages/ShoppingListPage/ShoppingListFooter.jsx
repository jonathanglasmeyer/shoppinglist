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
    onDeleteDone: PropTypes.func.isRequired
  }

  render() {
    const {onDeleteDone} = this.props;

    return <ListItem style={style}>
      <a onClick={onDeleteDone}>Archive done items</a>
    </ListItem>;
  }

}
