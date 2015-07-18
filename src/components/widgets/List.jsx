import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import Radium from 'radium';

import {LIST_ITEM_HEIGHT} from 'styles/dimensions';

import {RICH_EXPERIENCE} from 'styles/sizes';

@Radium
export default class List extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.node,
    footerBig: PropTypes.bool,
    noFooter: PropTypes.bool
  }

  render() {
    const {footerBig, noFooter} = this.props;
    const style = noFooter ? {} : {marginBottom: LIST_ITEM_HEIGHT + (footerBig ? 8 : 0)};

    return <ul style={style}>
      {this.props.children}
    </ul>;
  }

}
