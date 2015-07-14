import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {Input, ListItem, SvgIcon} from 'widgets';

export default class ShoppingListInput extends ValidatedComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  render() {
    const {onSubmit} = this.props;

    return <ListItem
      left={<SvgIcon icon='pencil' />}
      key={1}
      onClick={::this._focus}
      noTouchColor>
      <Input
        placeholder='Article'
        onSubmit={onSubmit}
        inputRef={::this._inputRef} />
    </ListItem>;
  }

  _inputRef(inputComponent) {
    this.inputComponent = inputComponent;
  }

  _focus() {
    this.inputComponent.focus();
  }

}
