import React, {Component, PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import ParseComponent from 'parse-react/class';
import {Parse} from 'parse';
// import ParseReact from 'parse-react';

import {SingleColumn} from 'layouts';
import {Card, Titlebar, List, ListItem} from 'widgets';

import {SHOPPINGLIST_ITEM} from 'constants';

export default class RecipeDetailPage extends ParseComponent {
  static propTypes = {
    params: PropTypes.object
  }

  componentDidMount() {
    // from the path `/inbox/messages/:id`
    // const {params} = this.props;
    // fetchMessage(params.id, function (err, message) {
      // this.setState({ message: message });
    // })
  }

  // observe() {
  //   return {
  //     items: new Parse.Query(SHOPPINGLIST_ITEM)
  //       .equalTo('user', Parse.User.current())
  //       .ascending('updatedAt')
  //   };
  // }

  render() {
    // const {recipe} = this.props;
    // console.info('[RecipeDetailPage.jsx] ', this.data);
    // console.info('[RecipeDetailPage.jsx] ', recipe);

    return <SingleColumn>
      <Card wider>
        <List noFooter>
          <Titlebar title='Recipe' />
          <ListItem>foo</ListItem>
        </List>
      </Card>
    </SingleColumn>;
  }

}
