import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Spline from 'canvas/Spline';

function buildCanvas(width, height) {
	const canvas = document.createElement('canvas');
	canvas.width = width;
  canvas.height = height;
	// this.ctx = canvas.getContext( '2d' );
	return canvas;

}

function getImageFromCanvas(canvas) {
  const image = new Image();
	image.src = canvas.toDataURL("image/png");

	return image.src;
}

function vector(coordinates) {
  return {...{x: 0, y: 0}, ...coordinates};
}

function buildSpline({intensity, padding, height, step}) {
  const points = [];
  var firstY;

	for(var i = 0; i <= intensity; i++) {

		let y = padding + Math.random() * (height - padding * 1.7);


    // first and last y position have to be the same
		if (i == 0) {
      firstY = y;
    }

    // if last : set to first
		if (i == intensity) {
      y = firstY;
    }

		points[i] = vector({x: step * i, y});
	}

	return new Spline({points});
}

export default class SquiggleText extends ValidatedComponent {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: ''
    };
  }

  static propTypes = {
    children: PropTypes.string.isRequired,
    squiggle: PropTypes.bool
  }

  componentDidMount() {
    const spanElement = React.findDOMNode(this.refs.span);
    const width = spanElement.offsetWidth;
    const intensity = Math.max(Math.round(width / 7), 1); // smaller: higher intens
    const height = spanElement.offsetHeight;
    const color = "#222";
    const step = width / intensity;
    const padding = height * 0.4;
    // const thickness = ~~(padding * 0.8);
    const thickness = 3;
    const canvas = buildCanvas(width, height);
    const canvasContext = canvas.getContext('2d');
    const spline = buildSpline({intensity, padding, height, step});
    spline.draw(canvasContext, color, thickness); // this mutates the canvasContext
    const canvasImage = getImageFromCanvas(canvas);
    this.setState({backgroundImage: canvasImage});

  }

  render() {
    const {children, squiggle} = this.props;
    const {backgroundImage} = this.state;

    const style = squiggle ? {
      display: 'inline',
      background: `url(${backgroundImage})`

    } : {};

    return <span ref='span' style={style}>
      {children}
    </span>;
  }


}
