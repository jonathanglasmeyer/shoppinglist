import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {ListItem, SquiggleText, SvgIcon} from 'widgets';
import {Styles} from 'material-ui';

import * as colors from 'styles/colors';

export default class ShoppingListItem extends ValidatedComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onSetDone: PropTypes.func.isRequired
  }

  render() {
    const {item, onSetDone} = this.props;
    const textColor = item.done ? colors.GRAY_DISABLED_TEXT : colors.TEXT;

    const svgIconName = `checkbox-${item.done ? 'marked' : 'blank'}`;
    const svgIconColor = item.done ? Styles.Colors.teal500 : undefined;
    return <ListItem
      left={<SvgIcon color={svgIconColor} icon={svgIconName} />}
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
