import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {SvgIcon, ListItemFooter} from 'widgets';
import {IconButton} from 'material-ui';

export default class RecipeFooter extends ValidatedComponent {
  static propTypes = {

  }

  render() {

    return <ListItemFooter pullRight>
      <IconButton tooltip='add'>
        <SvgIcon icon='basket' />
      </IconButton>
    </ListItemFooter>;
  }

}

