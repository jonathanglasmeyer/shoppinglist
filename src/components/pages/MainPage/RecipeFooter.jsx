import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {ListItemFooter} from 'widgets';
import {FlatButton} from 'material-ui';

export default class RecipeFooter extends ValidatedComponent {
  static propTypes = {

  }

  render() {
    return <ListItemFooter pullRight>
      <FlatButton
        label='BUY'
        primary
        />
    </ListItemFooter>;
  }

}

