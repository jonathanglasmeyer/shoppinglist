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
    color: PropTypes.string,
    glow: PropTypes.bool
  }

  render() {
    const {children, color, glow} = this.props;
    const style = [
      base,
      color && {color},
      glow && {textShadow: '0 1px 0 rgba(0,0,0,.2)'}
    ];

    return <h1 style={style}>{children}</h1>;
  }

}
