import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {buildSpline} from 'canvas/Spline';
import {buildCanvas, getImageFromCanvas} from 'canvas/helpers';

import * as colors from 'styles/colors';

@Radium
export default class SquiggleText extends ValidatedComponent {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: ''
    };
  }

  static propTypes = {
    children: PropTypes.string.isRequired,
    squiggle: PropTypes.bool,
    color: PropTypes.string
  }

  componentDidMount() {
    const spanElement = React.findDOMNode(this.refs.span);

    // parameters
    const width = spanElement.offsetWidth;
    const intensity = Math.max(Math.round(width / 25), 1); // smaller: higher intens
    const height = spanElement.offsetHeight;
    const color = colors.GRAY_DISABLED_TEXT;
    const step = width / intensity;
    const padding = height * 0.4;
    const thickness = 2; // in pixel

    const canvas = buildCanvas(width, height);
    const canvasContext = canvas.getContext('2d');
    const spline = buildSpline({intensity, padding, height, step});
    spline.draw(canvasContext, color, thickness); // this mutates the canvasContext
    const canvasImage = getImageFromCanvas(canvas);
    this.setState({backgroundImage: canvasImage});

  }

  render() {
    const {children, squiggle, color} = this.props;
    const {backgroundImage} = this.state;

    const style = squiggle ? {
      color,
      display: 'inline',
      background: `url(${backgroundImage})`

    } : {color};

    return <span ref='span' style={style}>
      {children}
    </span>;
  }


}
