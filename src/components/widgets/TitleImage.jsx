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
  return 150 + Math.floor(120 * Math.random());
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
    onClick: PropTypes.func,
    path: PropTypes.string.isRequired,
    yOffset: PropTypes.number,
    title: PropTypes.string
  }


  render() {
    const {path, yOffset=0, title, onClick} = this.props;

    const style = [
      base,
      {objectPosition: `0 -${yOffset}px`}
    ];

    const gradientStyle = [
      gradientBase,
      {background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,.8) 100%)'}
    ];

    const wrapperStyle = {...styleWrapper, height: this._randomHeight()};
    const imgPath = require(`assets/images/${path}`);

    return <div style={wrapperStyle} onClick={onClick}>
      <img style={style} src={imgPath} />
      <div style={gradientStyle} />
      <div style={titleStyle}>
        <Title color='#fff'>{title}</Title>
      </div>
    </div>;
  }

  _randomHeight() {
    // return 100;
    if (this._randomHeightCache) {
      return this._randomHeightCache;
    } else {
      this._randomHeightCache = getRandomHeight();
      return this._randomHeightCache;
    }
  }

}
