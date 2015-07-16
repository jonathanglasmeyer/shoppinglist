import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {ListInputItem} from 'widgets';

export default class ShoppingListInput extends ValidatedComponent {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  render() {
    const {onSubmit} = this.props;

    return <ListInputItem
      iconName='pencil'
      onSubmit={onSubmit}
      placeholder='Article' />;

  }





}
