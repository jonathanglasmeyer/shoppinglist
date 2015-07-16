import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

import {ListItem, Title} from 'widgets';


export default class Titlebar extends ValidatedComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    left: PropTypes.node,
    onClick: PropTypes.func,
    huge: PropTypes.bool,
  }

  render() {
    const {left, title, huge, onClick} = this.props;

    return <ListItem
      key={0}
      onClick={onClick}
      huge={huge} clickable
      left={left}>

      <Title>{title}</Title>

    </ListItem>;
  }

}
