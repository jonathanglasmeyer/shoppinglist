export function buildCanvas(width, height) {
	const canvas = document.createElement('canvas');
	canvas.width = width;
  canvas.height = height;
	return canvas;
}

export function getImageFromCanvas(canvas) {
  const image = new Image();
	image.src = canvas.toDataURL('image/png');
	return image.src;
}

export function vector(coordinates) {
  return {...{x: 0, y: 0}, ...coordinates};
}
