import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import RecipeTitlebar from './RecipeTitlebar.jsx';

import {List} from 'widgets';

export default class Recipe extends ValidatedComponent {
  static propTypes = {

  }

  render() {

    return <div>
      <List>
        <RecipeTitlebar />
      </List>
    </div>;
  }

}
