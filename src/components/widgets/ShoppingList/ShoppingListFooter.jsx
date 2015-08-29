import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import Radium from 'radium';
import {ValidatedComponent} from 'utils';
import {ListItemFooter} from 'widgets';

import {FlatButton} from 'material-ui';

@Radium
export default class ShoppingListFooter extends ValidatedComponent {
  static propTypes = {
    onDeleteDone: PropTypes.func.isRequired,
    isAnItemDone: PropTypes.bool.isRequired
  }

  render() {
    const {onDeleteDone, isAnItemDone} = this.props;

    return <ListItemFooter pullRight>
      <FlatButton
        label='CLEAN'
        primary disabled={!isAnItemDone}
        onClick={onDeleteDone} />
    </ListItemFooter>;
      // <a onClick={onDeleteDone}>Archive done items</a>
  }

}
