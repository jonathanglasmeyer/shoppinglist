import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

import ShoppingList from './MainPage/ShoppingList.jsx';

import {Card, Page, SearchInput} from 'widgets';
import {FixedLeft} from 'layouts';

import Recipe from './MainPage/Recipe.jsx';

import {RICH_EXPERIENCE_MINWIDTH} from 'styles/dimensions';
import {PAGE_WIDTH, FIXED_LEFT_MARGIN} from 'styles/dimensions';

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
  {
    title: 'And Yet Another',
    picturePath: 'recipe2.jpg',
    yOffset: 150
  },
  {
    title: 'Especially yummy recipe',
    picturePath: 'recipe2.jpg',
    yOffset: 150
  },
  {
    title: 'This one is also great',
    picturePath: 'recipe4.jpg',
    yOffset: 100
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

    const page = ({withShoppingList, searchFullWidth}) => {
      return <Page>
        {withShoppingList && <ShoppingList />}

        <Card fullWidth={searchFullWidth}>
          <SearchInput
            onSearchChange={::this._handleSearchChange}
            placeholder='Search Recipe' />
        </Card>

        {recipesFiltered.map((recipe, i) =>
            <Recipe key={i} recipe={recipe} />)}

      </Page>;
    };

    return windowWidth < RICH_EXPERIENCE_MINWIDTH ?
      page({withShoppingList: true}) :
      <div style={{
        marginLeft: PAGE_WIDTH + FIXED_LEFT_MARGIN,
        marginRight: 16
      }}>
        <FixedLeft>
          <ShoppingList />
        </FixedLeft>
        {page({withShoppingList: false, searchFullWidth: true})}
      </div>


  }

  _handleSearchChange(value) {
    this.setState({filterText: value});
  }


}


