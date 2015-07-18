import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

import ShoppingList from './MainPage/ShoppingList.jsx';

import {SearchCard} from 'widgets';
import {TwoColumns, SingleColumn, Grid} from 'layouts';

import Recipe from './MainPage/Recipe.jsx';

import * as size from 'styles/sizes';

const recipes = [
  {
    title: 'Incredible Mac ‘n’ Cheese, four ways',
    picturePath: 'mac-n-cheese.jpg',
    yOffset: 150
  },
  {
    title: 'Prawn & watermelon salad',
    picturePath: 'recipe2.jpg',
    yOffset: 150
  },
  {
    title: 'Prawn & watermelon salad',
    picturePath: 'recipe2.jpg',
    yOffset: 150
  },
  {
    title: 'Homemade tomato ketchup',
    picturePath: 'recipe4.jpg',
    yOffset: 100
  },
  {
    title: 'Yet another Recipe',
    picturePath: 'mac-n-cheese.jpg',
    yOffset: 150
  },
];

export default class MainPage extends ValidatedComponent {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      windowWidth: window.innerWidth,
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
    const {filterText, windowWidth} = this.state;

    const recipesFiltered = recipes.filter(recipe =>
      recipe.title.toLowerCase().indexOf(filterText.toLowerCase()) >= 0);

    return windowWidth < size.RICH_EXPERIENCE_MINWIDTH ?
      this._renderSingleColumn({recipesFiltered}) :
      this._renderTwoColumns({recipesFiltered});
  }

  _renderSingleColumn({recipesFiltered}) {
    return <SingleColumn>

      <ShoppingList />

      <SearchCard
        handleSearchChange={::this._handleSearchChange}
        placeholder='Search for recipe or ingredient' />

      {recipesFiltered.map((recipe, i) =>
          <Recipe key={i} recipe={recipe} />)}

    </SingleColumn>;
  }

  _renderTwoColumns({recipesFiltered}) {
    return <TwoColumns>
      <ShoppingList />
      <div style={{width: '100%', flexDirection: 'column', display: 'flex'}}>
        <SearchCard
          handleSearchChange={::this._handleSearchChange}
          placeholder='Search for recipe or ingredient' />
        {this._renderGrid({recipesFiltered})}
      </div>
    </TwoColumns>;
  }

  _renderGrid({recipesFiltered}) {
    return <Grid>


      {recipesFiltered.map((recipe, i) =>
          <Recipe key={i} recipe={recipe} />)}

    </Grid>;
  }

  _handleSearchChange(value) {
    this.setState({filterText: value});
  }


}


