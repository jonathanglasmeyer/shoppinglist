import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';
import {GRAY_DARK, GRAY} from 'styles/colors';

const style = {
  padding: '16px 0',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  background: GRAY_DARK,
  color: GRAY
};

@Radium
export default class Footer extends ValidatedComponent {
  static propTypes = {
    username: PropTypes.string.isRequired,
    onLogout: PropTypes.func.isRequired
  }

  render() {
    const {onLogout, username} = this.props;

    return <footer style={style}>
      <div>Logged in as {username}</div>
      <p>
        <a onClick={onLogout}>Log out</a>
      </p>
    </footer>;
  }

}
