import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {ValidatedComponent} from 'utils';
import masonry from 'react-masonry-component';
const Masonry = masonry(React);
console.info('[Grid.jsx] ', Masonry);

// const styles = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   alignItems: 'flex-start'
//   // justifyContent: 'center'
// };

export default class Grid extends ValidatedComponent {

  render() {
    const {margin, children} = this.props;

    // const style = {
    //   ...styles
    // };

    // return <div style={style} id='Grid'>
    //   {this.props.children}
    // </div>;

    return <Masonry
      elementType={'ul'}
      disableImagesLoaded={true}>
      {children}
    </Masonry>;
  }

}

        // );
