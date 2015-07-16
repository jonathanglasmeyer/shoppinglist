import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';


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
    onKeyDown: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  }

  render() {
    const {onKeyDown, inputRef, placeholder} = this.props;

    return <input
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      style={style}
      type='text'
      ref={::this._inputRef} />;
  }

  _inputRef(inputComponent) {
    this.inputComponent = React.findDOMNode(inputComponent);
    this.props.inputRef(this.inputComponent);
  }

}
