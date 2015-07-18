import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';

const styles = {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  overflow: 'auto'
};

export default class FixedLeft extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    width: PropTypes.number.isRequired,
    margin: PropTypes.number.isRequired
  }

  render() {
    const {width, margin} = this.props;

    const style = {
      ...styles,
      width, margin
    };

    return <div id='FixedLeft' style={style}>
      {this.props.children}
    </div>;
  }

}
