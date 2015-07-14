import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

const ENTER_KEY_CODE = 13;

// const styleForm = {
//   width: '100%'
// };

const style = {
  border: 'none',
  width: '100%'
};

@Radium
export default class Input extends ValidatedComponent {
  static propTypes = {
    inputRef: PropTypes.any,
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  }

  render() {
    const {onSubmit, inputRef, placeholder} = this.props;

    return <input
      onKeyDown={::this._handleKeyDown}
      placeholder={placeholder}
      style={style}
      type='text'
      ref={::this._inputRef} />;
  }

  _inputRef(inputComponent) {
    this.inputComponent = React.findDOMNode(inputComponent);
    this.props.inputRef(this.inputComponent);
  }

  _onSubmit(value) {
    if (value) {
      this.inputComponent.value = '';
      this.props.onSubmit(value);
    }
  }

  _handleKeyDown(event) {

    if (event.keyCode === ENTER_KEY_CODE) {
      this._onSubmit(event.target.value);
    }
  }


}
