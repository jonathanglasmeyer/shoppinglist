import React, {Component, PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import ParseReact from 'parse-react';
import {Parse} from 'parse';

import {SHOPPINGLIST_ITEM} from 'constants';

import {Card, List, TitleImage} from 'widgets';

import RecipeListItem from './RecipeListItem.jsx';
import RecipeFooter from './RecipeFooter.jsx';

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

    return <Card>
      <List>
        <TitleImage
          onClick={::this._handleClick}
          path={picturePath}
          title={title}
          yOffset={yOffset} />
        <RecipeFooter />
      </List>

    </Card>;
  }

  _handleClick() {
    const {recipe} = this.props;
    this.props.onSetActiveRecipe(recipe.id);
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
