import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {LIST_ITEM_HEIGHT} from 'styles/sizes';


const styles = {
};

@Radium
export default class List extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.node,
    footerBig: PropTypes.bool,
    noFooter: PropTypes.bool
  }

  render() {
    const {footerBig, noFooter} = this.props;
    const style = [
     styles,
      !noFooter && {
        paddingBottom: LIST_ITEM_HEIGHT + (footerBig ? 8 : 0)
      }
    ];

    return <ul id='List' style={style}>
      {this.props.children}
    </ul>;
  }

}
