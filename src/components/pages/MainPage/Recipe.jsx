import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

import {Card, List, TitleImage} from 'widgets';

// import RecipeFooter from './RecipeFooter.jsx';

export default class Recipe extends ValidatedComponent {
  static propTypes = {
    recipe: PropTypes.object.isRequired
  }

  render() {
    const {recipe} = this.props;
    const {title, picturePath, yOffset} = recipe;

    return <Card>
      <List noFooter>
        <TitleImage
          path={picturePath}
          title={title}
          yOffset={yOffset} />
      </List>

    </Card>;
  }

}
