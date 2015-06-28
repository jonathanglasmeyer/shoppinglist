import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {Input, ListItem} from 'widgets';

export default class ShoppingListInput extends ValidatedComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  render() {
    const {onSubmit} = this.props;

    return <ListItem key={1}>
      <Input onSubmit={onSubmit}/>
    </ListItem>;
  }

}
