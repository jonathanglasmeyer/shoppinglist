import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

import ShoppingList from './MainPage/ShoppingList.jsx';

import {Card, Page, SearchInput} from 'widgets';

import Recipe from './MainPage/Recipe.jsx';

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
    title: 'Poop',
    picturePath: 'mac-n-cheese.jpg',
    yOffset: 150
  },
  {
    title: 'Dick',
    picturePath: 'recipe2.jpg',
    yOffset: 150
  },
  {
    title: 'What fukcing else',
    picturePath: 'recipe2.jpg',
    yOffset: 150
  },
  {
    title: 'dunno',
    picturePath: 'recipe4.jpg',
    yOffset: 100
  },
];

export default class MainPage extends ValidatedComponent {

  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };
  }

  render() {
    const {filterText} = this.state;

    const recipesFiltered = recipes.filter(recipe => 
      recipe.title.toLowerCase().indexOf(filterText.toLowerCase()) >= 0);

    console.info('[MainPage.jsx] ', recipesFiltered);
    return <Page>
      <ShoppingList onNotifyItemAdded={this.props.onNotifyItemAdded}/>

      <Card>
        <SearchInput
          onSearchChange={::this._handleSearchChange}
          placeholder='Search Recipe' />
      </Card>

      {recipesFiltered.map((recipe, i) =>
          <Recipe key={i} recipe={recipe} />)}

    </Page>;
  }

  _handleSearchChange(value) {
    this.setState({filterText: value});
  }


}


