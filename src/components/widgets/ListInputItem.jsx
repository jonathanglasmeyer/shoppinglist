import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

import {Input, ListItem, SvgIcon} from 'widgets';

const ENTER_KEY_CODE = 13;

export default class ListInputItem extends ValidatedComponent {
  static propTypes = {
    iconName: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
  }

  render() {
    const {iconName, onSubmit, placeholder} = this.props;

    return <ListItem
      left={<SvgIcon icon={iconName} />}
      key={1}
      onClick={::this._focus}
      onClickLeft={::this._submit}
      noTouchColor>
      <Input
        placeholder={placeholder}
        onKeyDown={::this._handleKeyDown}
        inputRef={::this._inputRef} />
    </ListItem>;
  }

  _inputRef(inputComponent) {
    this.inputComponent = inputComponent;
  }

  _handleKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      const {value} = event.target;
      this.inputText = value;
      this._submit();
    }
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
