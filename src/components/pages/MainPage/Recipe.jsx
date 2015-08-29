import React, {Component, PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import ParseReact from 'parse-react';
import {Parse} from 'parse';
import {Link} from 'react-router';

import {SHOPPINGLIST_ITEM} from 'constants';

import {Card, TitleImage} from 'widgets';

// import RecipeListItem from './RecipeListItem.jsx';
// import RecipeFooter from './RecipeFooter.jsx';

export default class Recipe extends Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
    onSetActiveRecipe: PropTypes.func.isRequired
  }

  static defaultProps = {
    ingredients: ['Empty']
  }

  render() {
    const {recipe} = this.props;
    const {title, picturePath, yOffset} = recipe;

    return <Link to={`/recipe/${recipe.id}`}>
      <Card>
        <TitleImage
          path={picturePath}
          title={title}
          yOffset={yOffset} />
      </Card>
    </Link>;
  }

  // later
  _handleAddItems() {
    const {ingredients} = this.props.recipe;

    if (!ingredients) {
      return;
    }

    ingredients.map(ingredient => {
      ParseReact.Mutation.Create(SHOPPINGLIST_ITEM, {
        name: ingredient,
        done: false,
        user: Parse.User.current().toPlainObject()
      }).dispatch();
    });
  }

}
