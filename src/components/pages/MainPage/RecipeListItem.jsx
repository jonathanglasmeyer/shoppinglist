import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {ListItem} from 'widgets';

// import * as colors from 'styles/colors';

export default class RecipeListItem extends ValidatedComponent {
  static propTypes = {
    ingredient: PropTypes.string.isRequired
  }

  render() {

    return <ListItem>
      {this.props.ingredient}
    </ListItem>;
  }

}
