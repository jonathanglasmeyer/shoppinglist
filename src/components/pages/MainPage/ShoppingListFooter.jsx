import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import Radium from 'radium';
import {ValidatedComponent} from 'utils';
import {ListItem} from 'widgets';

import {FlatButton} from 'material-ui';

const style = {
  position: 'absolute',
  bottom: 0,
  left: 0
};

@Radium
export default class ShoppingListFooter extends ValidatedComponent {
  static propTypes = {
    onDeleteDone: PropTypes.func.isRequired,
    isAnItemDone: PropTypes.bool.isRequired
  }

  render() {
    const {onDeleteDone, isAnItemDone} = this.props;

    return <ListItem style={style} pullRight>
      <FlatButton
        label='CLEAN'
        primary disabled={!isAnItemDone}
        onClick={onDeleteDone}/>
    </ListItem>;
      // <a onClick={onDeleteDone}>Archive done items</a>
  }

}
