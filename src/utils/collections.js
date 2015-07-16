export function select(styles, props) {
  return Object.keys(styles)
    .filter((key) => props[key])
    .map((key) => styles[key]);
}
