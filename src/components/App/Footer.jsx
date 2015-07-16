import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';
import * as colors from 'styles/colors';

const style = {
  padding: '16px 0',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  color: colors.GRAY
};

@Radium
export default class Footer extends ValidatedComponent {
  static propTypes = {
    onLogout: PropTypes.func.isRequired
  }

  render() {
    const {onLogout} = this.props;

    return <footer style={style}>
      <a onClick={onLogout} style={{fontSize: 14}}>Logout</a>
    </footer>;
  }

}
