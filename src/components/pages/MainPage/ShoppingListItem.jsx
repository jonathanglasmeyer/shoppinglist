import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {Checkbox, ListItem, SquiggleText} from 'widgets';

import * as colors from 'styles/colors';

export default class ShoppingListItem extends ValidatedComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onSetDone: PropTypes.func.isRequired
  }

  render() {
    const {item, onSetDone} = this.props;
    const textColor = item.done ? colors.GRAY_DISABLED_TEXT : colors.TEXT;

    return <ListItem
      left={<Checkbox checked={item.done} />}
      onClick={() => onSetDone(item, !item.done)}
      clickable>

      <SquiggleText
        color={textColor}
        squiggle={item.done}>

        {item.name}
      </SquiggleText>

    </ListItem>;
  }

}
