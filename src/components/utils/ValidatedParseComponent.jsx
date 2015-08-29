import ParseComponent from 'parse-react/class';

export default process.env.NODE_ENV === 'development' ? class ValidatedParseComponent extends ParseComponent {
  static toJSON() {
    return this.name;
  }

  componentWillMount() {
    this.validateProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.validateProps(nextProps);
  }

  validateProps(props) {
    const {displayName, name, propTypes} = this.constructor;
    const componentName = displayName || name;
    if (!propTypes && Object.keys(props).length) {
      console.warn(`There are no PropTypes specified on component "${componentName}". Cannot validate props. The given props are: `, props);
      return;
    }
    for (const prop in props) {
      if (!propTypes[prop]) {
        console.warn(`You set a property "${prop}" on Component "${componentName}" but did not provide a PropType declaration for this prop.`);
      }
    }
  }
} : ParseComponent;
