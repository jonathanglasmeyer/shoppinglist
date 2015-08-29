import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {SingleColumn} from 'layouts';
import {Card, Titlebar, List, ListItem} from 'widgets';

export default class RecipeDetailPage extends ValidatedComponent {
  static propTypes = {
    recipe: PropTypes.object.isRequired
  }

  render() {
    const {recipe} = this.props;
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
