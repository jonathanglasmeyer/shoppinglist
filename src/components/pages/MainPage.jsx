import React, {Component, PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {first as _first} from 'lodash';

import {ShoppingListController} from 'components/controllers';

import {SearchCard} from 'widgets';
import {TwoColumns, SingleColumn, Grid} from 'layouts';

import {RecipeDetailPage} from 'pages';

import Recipe from './MainPage/Recipe.jsx';

import * as size from 'styles/sizes';

const recipes = [
  {
    title: 'Incredible Mac ‘n’ Cheese, four ways',
    id: 'foo',
    ingredients: 'Lecker schmecker leckere SachenLecker schmecker leckere SachenLecker schmecker leckere Sachen'.split(' '),
    picturePath: 'mac-n-cheese.jpg',
    yOffset: 150
  },
  {
    title: 'Prawn & watermelon salad',
    id: 'bar',
    picturePath: 'recipe2.jpg',
    ingredients: 'Lecker schmecker leckere SachenLecker schmecker leckere SachenLecker schmecker leckere Sachen'.split(' '),
    yOffset: 150
  },
  {
    title: 'Incredible Mac ‘n’ Cheese, four ways',
    id: 'foo',
    ingredients: 'Lecker schmecker leckere SachenLecker schmecker leckere SachenLecker schmecker leckere Sachen'.split(' '),
    picturePath: 'mac-n-cheese.jpg',
    yOffset: 150
  },
  {
    title: 'Prawn & watermelon salad',
    id: 'bar',
    picturePath: 'recipe2.jpg',
    ingredients: 'Lecker schmecker leckere SachenLecker schmecker leckere SachenLecker schmecker leckere Sachen'.split(' '),
    yOffset: 150
  },
  {
    title: 'Incredible Mac ‘n’ Cheese, four ways',
    id: 'foo',
    ingredients: 'Lecker schmecker leckere SachenLecker schmecker leckere SachenLecker schmecker leckere Sachen'.split(' '),
    picturePath: 'mac-n-cheese.jpg',
    yOffset: 150
  },
  {
    title: 'Prawn & watermelon salad',
    id: 'bar',
    picturePath: 'recipe2.jpg',
    ingredients: 'Lecker schmecker leckere SachenLecker schmecker leckere SachenLecker schmecker leckere Sachen'.split(' '),
    yOffset: 150
  },
  {
    title: 'Incredible Mac ‘n’ Cheese, four ways',
    id: 'foo',
    ingredients: 'Lecker schmecker leckere SachenLecker schmecker leckere SachenLecker schmecker leckere Sachen'.split(' '),
    picturePath: 'mac-n-cheese.jpg',
    yOffset: 150
  },
  {
    title: 'Prawn & watermelon salad',
    id: 'bar',
    picturePath: 'recipe2.jpg',
    ingredients: 'Lecker schmecker leckere SachenLecker schmecker leckere SachenLecker schmecker leckere Sachen'.split(' '),
    yOffset: 150
  },
  {
    title: 'Incredible Mac ‘n’ Cheese, four ways',
    id: 'foo',
    ingredients: 'Lecker schmecker leckere SachenLecker schmecker leckere SachenLecker schmecker leckere Sachen'.split(' '),
    picturePath: 'mac-n-cheese.jpg',
    yOffset: 150
  },
  {
    title: 'Prawn & watermelon salad',
    id: 'bar',
    picturePath: 'recipe2.jpg',
    ingredients: 'Lecker schmecker leckere SachenLecker schmecker leckere SachenLecker schmecker leckere Sachen'.split(' '),
    yOffset: 150
  },
  {
    title: 'Incredible Mac ‘n’ Cheese, four ways',
    id: 'foo',
    ingredients: 'Lecker schmecker leckere SachenLecker schmecker leckere SachenLecker schmecker leckere Sachen'.split(' '),
    picturePath: 'mac-n-cheese.jpg',
    yOffset: 150
  },
  {
    title: 'Prawn & watermelon salad',
    id: 'bar',
    picturePath: 'recipe2.jpg',
    ingredients: 'Lecker schmecker leckere SachenLecker schmecker leckere SachenLecker schmecker leckere Sachen'.split(' '),
    yOffset: 150
  },
];

export default class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      windowWidth: window.innerWidth,
      activeRecipe: null
    };
  }

  handleResize() {
    this.setState({windowWidth: window.innerWidth});
  }

  componentDidMount() {
    window.addEventListener('resize', ::this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', ::this.handleResize);
  }

  render() {
    const {filterText, windowWidth, activeRecipe} = this.state;
    if (activeRecipe) {
      return this._renderDetailRecipe();
    }

    const recipesFiltered = recipes.filter(recipe =>
      recipe.title.toLowerCase().indexOf(filterText.toLowerCase()) >= 0);

    return windowWidth < size.RICH_EXPERIENCE_MINWIDTH ?
      this._renderSingleColumn({recipesFiltered}) :
      this._renderTwoColumns({recipesFiltered});
  }

  _renderDetailRecipe() {
    const activeRecipe = _first(recipes, recipe => recipe.id === this.state.activeRecipe);
    return <RecipeDetailPage recipe={activeRecipe} />;
  }


  _renderSingleColumn({recipesFiltered}) {
    return <SingleColumn>

      <ShoppingListController />

      <SearchCard
        handleSearchChange={::this._handleSearchChange}
        placeholder='Search for recipe or ingredient' />

      {::this._renderRecipes(recipesFiltered)}

    </SingleColumn>;
  }

  _renderTwoColumns({recipesFiltered}) {
    return <TwoColumns>
      <ShoppingListController />
      <div style={{width: '100%', flexDirection: 'column', display: 'flex'}} id='GridWrapper'>
        {this._renderGrid({recipesFiltered})}
      </div>
    </TwoColumns>;
  }


  _renderGrid({recipesFiltered}) {
    return <Grid>{::this._renderRecipes(recipesFiltered)}</Grid>;
  }

  _renderRecipes(recipes_) {
    return recipes_.map((recipe, i) =>
      <Recipe
        key={i}
        onSetActiveRecipe={::this._handleSetActiveRecipe}
        recipe={recipe} />);
  }

  _handleSearchChange(value) {
    this.setState({filterText: value});
  }

  _handleSetActiveRecipe(id) {
    this.setState({activeRecipe: id});
  }


}


