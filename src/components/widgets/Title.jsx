import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

const base = {
  fontSize: 22,
  fontFamily: 'Montserrat, sans-serif', // not sure ...
  fontWeight: 400
};

@Radium
export default class Title extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    color: PropTypes.string
  }

  render() {
    const {children, color} = this.props;
    const style = [
      base,
      color && {color},
      {textShadow: '0 1px 0 rgba(0,0,0,.3)'}
    ];

    return <h1 style={style}>{children}</h1>;
  }

}
