import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

import {Card, SearchInput} from 'widgets';

export default class SearchCard extends ValidatedComponent {
  static propTypes = {
    fullWidth: PropTypes.bool,
    handleSearchChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
  }

  render() {
    const {fullWidth, placeholder, handleSearchChange} = this.props;

    return <Card fullWidth={fullWidth}>
      <SearchInput
        onSearchChange={handleSearchChange}
        placeholder={placeholder} />
    </Card>;

  }

}
