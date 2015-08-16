import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
const styles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  // justifyContent: 'center'
};

export default class Grid extends ValidatedComponent {

  render() {
    const {margin} = this.props;

    const style = {
      ...styles
    };

    return <div style={style} id='Grid'>
      {this.props.children}
    </div>;
  }

}
