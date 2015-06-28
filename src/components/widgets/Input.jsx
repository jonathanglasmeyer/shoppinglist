import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

const styleForm = {
  width: '100%'
};

const style = {
  border: 'none',
  width: '100%'
};

@Radium
export default class Input extends ValidatedComponent {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  render() {
    const {onSubmit} = this.props;

    return <form style={styleForm} onSubmit={::this._onSubmit}>
      <input placeholder='New Article' style={style} type='text' ref='input' />
    </form>;
  }

  _onSubmit(e) {
    e.preventDefault();
    const inputField = React.findDOMNode(this.refs.input);
    const inputValue = inputField.value;

    if (inputValue) {
      inputField.value = '';
      this.props.onSubmit(inputValue);
    }
  }


}
