import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {Parse} from 'parse';
import Radium from 'radium';
import ParseComponent from 'parse-react/class';
import ParseReact from 'parse-react';
import {ShoppingListPage} from 'pages';

// import NavigationBar from './App/NavigationBar.jsx';
import Footer from './App/Footer.jsx';


// import {GREEN, RED} from 'styles/colors';

const style = {
  display: 'flex',
  minHeight: '100%',
  flexDirection: 'column',
  alignItems: 'center'
};

@Radium
export default class App extends ParseComponent {

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
    const page = <ShoppingListPage />;

    // if user is logged in
    if (this.data.user) {

      return <div style={style}>
        {/*<NavigationBar /> */}
        {page}
        <Footer
          username={this.data.user.username}
          onLogout={::this._handleLogout}/>

      </div>;
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
          checked={this.state.signup}
          onChange={::this._toggleSignup}>

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
  }

  _handleLogout() {
    Parse.User.logOut();
  }

}
