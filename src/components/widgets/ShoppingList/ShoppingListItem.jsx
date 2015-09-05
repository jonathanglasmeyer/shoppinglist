import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {ListItem, SquiggleText} from 'widgets';

import * as colors from 'styles/colors';

export default class ShoppingListItem extends ValidatedComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onSetDone: PropTypes.func.isRequired
  }

  render() {
    const {item, onSetDone} = this.props;
    let textColor = item.done ? colors.GRAY_DISABLED_TEXT : colors.TEXT;
    if (item.temporary) textColor = '#666';

    return <ListItem
      onClick={() => item.temporary? {} : onSetDone(item, !item.done)}
      clickable={!item.temporary}>

      <SquiggleText
        color={textColor}
        squiggle={item.done}>

        {item.name}
      </SquiggleText>

    </ListItem>;
  }

}
