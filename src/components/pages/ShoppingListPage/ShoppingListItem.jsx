import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {ListItem, SvgIcon} from 'widgets';

import {GRAY_DISABLED_TEXT, GREEN} from 'styles/colors';

const doneStyle = {
  textDecoration: 'line-through',
  color: GRAY_DISABLED_TEXT
};


export default class ShoppingListItem extends ValidatedComponent {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onSetDone: PropTypes.func.isRequired
  }

  render() {
    const {item, onSetDone} = this.props;
    const style = item.done ? doneStyle : {};

    const left = <SvgIcon
      color={GREEN}
      icon={`checkbox-${item.done ? 'blank' : 'marked'}`} />;

    return <ListItem
      style={style}
      left={left}
      onClick={() => onSetDone(item, !item.done)}
      clickable>
      {item.name}
    </ListItem>;
  }

}
