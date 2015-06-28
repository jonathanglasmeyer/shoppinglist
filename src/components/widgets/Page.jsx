import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {PAGE_WIDTH} from 'styles/dimensions';
import {DESKTOP} from 'styles/sizes';

const style = {
  width: '95%',
  maxWidth: PAGE_WIDTH,
  background: '#fff',
  flex: 1,
  boxShadow: '2px 2px 2px 0 rgba(0, 0, 0, 0.08)',
  marginTop: 8,

  [DESKTOP]: {
    marginTop: 24
  },
  marginBottom: 24
};


@Radium
export default class Page extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const {children} = this.props;

    return <div style={style}>
      {children}
    </div>;
  }

}
