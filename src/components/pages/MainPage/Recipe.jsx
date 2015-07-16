import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import RecipeTitlebar from './RecipeTitlebar.jsx';

import {List, Image} from 'widgets';

export default class Recipe extends ValidatedComponent {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    const {title} = this.props;

    return <div>
      <List>
        <Image gradient
          path='mac-n-cheese.jpg'
          title="A killer mac 'n' cheese thats freaking delicious"
          yOffset={222} />
      </List>
    </div>;
  }

}
