import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {ListItem} from 'widgets';

export default class ShoppingListItem extends ValidatedComponent {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  render() {
    const {item} = this.props;
    const style = item.done ? {textDecoration: 'line-through'} : {};
    return <ListItem style={style}>
      {item.name}
    </ListItem>;
  }

}
