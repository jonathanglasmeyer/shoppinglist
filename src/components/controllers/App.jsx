import React from 'react';
import {Parse} from 'parse';
import ParseComponent from 'parse-react/class';
import ParseReact from 'parse-react';

export default class App extends ParseComponent {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      signup: false
    };
  }

  observe() {
    return {
      user: ParseReact.currentUser
    };
  }

  render() {

    if (this.data.user) {
      return <div>Logged in as {this.data.user.username}</div>;
    }

    // if user is not logged in
    return <div>
      <p style={{color: 'red'}}>{this.state.error}</p>
      <form onSubmit={::this._onSubmit}>
        Email:<br/>
        <input type='email' ref='email'/>
        <br/>Password<br/>
        <input type='password' ref='password' />
        <button type='submit'>
          {this.state.signup ? 'Signup' : 'Login'}
        </button>
        <input
          type="checkbox"
          checked={this.state.signup}>

          Signup
        </input>
      </form>
    </div>;
  }

  _toggleSignup() {
    this.setState({signup: !this.state.signup});
  }

  _onSubmit(e) {
    e.preventDefault();
    const username = React.findDOMNode(this.refs.email).value;
    const password = React.findDOMNode(this.refs.password).value;

    if (!(username.length && password.length)) {
      console.info('[App.jsx] ', 'invalid input');
      this.setState({
        error: 'Please enter all fields'
      });
      return;
    }

    const user = new Parse.User({username, password});
    console.info('[App.jsx] ', user);

    if (this.state.signup) {
      user.signUp().then(() => {
        this.setState({
          error: null
        });
      }, function() {
        this.setState({
          error: 'Invalid stuff'
        });
      });
    } else {
      Parse.User.logIn(username, password).then(() => {
        this.setState({
          error: null
        });
      }, () => {
        this.setState({
          error: 'Incorrect username or password'
        });
      });
    }


    console.info('[App.jsx] ', username, password);
  }

}
