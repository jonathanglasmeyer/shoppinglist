import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import {FixedLeft} from 'layouts';

import * as size from 'styles/sizes';

export default class TwoColumns extends ValidatedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const {children} = this.props;
    console.assert(children.length === 2);

    const leftElementMargin = size.PAGE_MARGIN_DESKTOP; // all 4 directions
    // the shopping list is CARD_WIDTH wide
    // extra 16px to have some spacing to the scrollbar
    const leftWidth = size.CARD_WIDTH + 16;

    const style = {
      marginLeft: leftWidth + leftElementMargin * 2,
      marginRight: 0, // the cards supply the margin
      marginTop: size.PAGE_MARGIN_DESKTOP
    };

    return <div style={style} id='TwoColums'>
      <FixedLeft width={leftWidth} margin={leftElementMargin}>
        {children[0]}
      </FixedLeft>
      {children[1]}
    </div>;
  }

}
