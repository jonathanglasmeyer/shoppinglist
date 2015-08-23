import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {Title} from 'widgets';

const BORDER_RADIUS = 3;

const gradientBase = {
  position: 'absolute',
  top: '30%',
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: BORDER_RADIUS
  // width: '100%',
  // height: '100%',
};

function getRandomHeight() {
  return 150 + Math.floor(150 * Math.random());
}

const styleWrapper = {
  cursor: 'pointer',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
};

const base = {
  objectFit: 'cover',
  width: '100%',
  height: '100%',

  borderRadius: BORDER_RADIUS,
};

const titleStyle = {
  position: 'absolute',
  bottom: 16,
  left: 16,
  right: 16
};


@Radium
export default class TitleImage extends ValidatedComponent {
  static propTypes = {
    path: PropTypes.string.isRequired,
    yOffset: PropTypes.number,
    title: PropTypes.string
  }

  randomHeight() {
    // return 100;
    if (this._randomHeight) {
      return this._randomHeight;
    } else {
      this._randomHeight = getRandomHeight();
      return this._randomHeight;
    }
  }

  render() {
    const {path, yOffset=0, title} = this.props;

    const style = [
      base,
      {objectPosition: `0 -${yOffset}px`}
    ];

    const gradientStyle = [
      gradientBase,
      {background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,.8) 100%)'}
    ];

    const wrapperStyle = {...styleWrapper, height: this.randomHeight()};

    return <div style={wrapperStyle}>
      <img style={style} src={path} />
      <div style={gradientStyle} />
      <div style={titleStyle}>
        <Title color='#fff'>{title}</Title>
      </div>
    </div>;
  }

}
