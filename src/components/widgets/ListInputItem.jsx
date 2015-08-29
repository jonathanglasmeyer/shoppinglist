import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

import {Input, ListItem} from 'widgets';

const ENTER_KEY_CODE = 13;

export default class ListInputItem extends ValidatedComponent {
  static propTypes = {
    iconName: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string.isRequired
  }

  render() {
    const {placeholder} = this.props;

    return <ListItem
      key={1}
      onClick={::this._focus}
      onClickLeft={::this._submit}>
      <Input
        placeholder={placeholder}
        onKeyUp={::this._handleKeyUp}
        onKeyDown={::this._handleKeyDown}
        inputRef={::this._inputRef} />
    </ListItem>;
  }

  _inputRef(inputComponent) {
    this.inputComponent = inputComponent;
  }

  _handleKeyDown(event) {
    const {value} = event.target;

    if (event.keyCode === ENTER_KEY_CODE) {
      this.inputText = value;
      this._submit();
    }
  }

  _handleKeyUp() {
    this.props.onKeyUp(this.inputComponent.value);
  }

  _submit() {
    const value = this.inputComponent.value;
    if (value) {
      this.inputComponent.value = '';
      this.props.onSubmit(value);
    }
  }

  _focus() {
    this.inputComponent.focus();
  }

}
