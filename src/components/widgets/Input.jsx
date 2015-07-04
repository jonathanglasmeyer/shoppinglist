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
    inputRef: PropTypes.any,
    onSubmit: PropTypes.func.isRequired
  }

  render() {
    const {onSubmit, inputRef} = this.props;

    return <form style={styleForm} onSubmit={::this._onSubmit}>
      <input placeholder='New Article' style={style} type='text' ref={::this._inputRef} />
    </form>;
  }

  _inputRef(inputComponent) {
    this.inputComponent = React.findDOMNode(inputComponent);
    this.props.inputRef(this.inputComponent);
  }

  _onSubmit(e) {
    e.preventDefault();
    const inputValue = this.inputComponent.value;

    if (inputValue) {
      this.inputComponent.value = '';
      this.props.onSubmit(inputValue);
    }
  }


}
