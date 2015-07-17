import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

import {ListInputItem} from 'widgets';

export default class SearchInput extends ValidatedComponent {
  static propTypes = {
    placeholder: PropTypes.string,
    onSearchChange: PropTypes.func.isRequired
  }

  render() {
    const {placeholder='Search for stuff'} = this.props;

    return <ListInputItem
      iconName='search'
      onKeyUp={::this._handleKeyUp}
      onSubmit={() => {}}
      placeholder='Find Recipe' />;
  }

  _handleKeyUp(value) {
    this.props.onSearchChange(value);
  }

}
