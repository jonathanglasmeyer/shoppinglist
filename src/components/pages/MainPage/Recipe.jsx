import React, {Component, PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import ParseReact from 'parse-react';
import {Parse} from 'parse';

import {SHOPPINGLIST_ITEM} from 'constants';

import {Card, List, TitleImage} from 'widgets';

import RecipeListItem from './RecipeListItem.jsx';

export default class Recipe extends Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
    onSetActiveRecipe: PropTypes.func.isRequired,
    open: PropTypes.bool
  }

  static defaultProps = {
    ingredients: ['Empty']
  }

  render() {
    const {recipe, open} = this.props;
    const {title, picturePath, yOffset} = recipe;

    return <Card onClick={::this._handleClick}>
      <List noFooter>
        <TitleImage
          path={picturePath}
          title={title}
          yOffset={yOffset} />
        {open && recipe.ingredients.map(ingredient => <RecipeListItem ingredient={ingredient} />)}
      </List>

    </Card>;
  }

  _handleClick() {
    // TODO: we need a real id for this later
    const {recipe, open} = this.props;

    this.props.onSetActiveRecipe(open ? null : recipe.id);
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
