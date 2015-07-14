import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {ListItem, SquiggleText} from 'widgets';

export default class ShoppingListItem extends ValidatedComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onSetDone: PropTypes.func.isRequired
  }

  render() {
    const {item, onSetDone} = this.props;

    return <ListItem
      onClick={() => onSetDone(item, !item.done)}
      clickable>
      <SquiggleText squiggle={item.done}>{item.name}</SquiggleText>
    </ListItem>;
  }

}
