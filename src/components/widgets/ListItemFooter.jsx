import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars

import {ValidatedComponent} from 'utils';
import {ListItem} from 'widgets';

const style = {
  position: 'absolute',
  bottom: 0,
  left: 0,
};

export default class ListItemFooter extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    pullRight: PropTypes.bool
  }

  render() {
    const {pullRight} = this.props;

    return <ListItem style={style} pullRight>
      {this.props.children}
    </ListItem>;
  }

}

