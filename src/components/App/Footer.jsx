import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

export default class Footer extends ValidatedComponent {
  static propTypes = {
    username: PropTypes.string.isRequired,
    onLogout: PropTypes.func.isRequired
  }

  render() {
    const {onLogout, username} = this.props;

    return <p>
      Logged in as {username}
      <br/>
      <a onClick={onLogout}>Log out</a>
    </p>;
  }

}
