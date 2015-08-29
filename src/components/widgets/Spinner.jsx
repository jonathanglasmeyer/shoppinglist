require('styles/spinner.less');

import React, {Component, PropTypes} from 'react'; // eslint-disable-line no-unused-vars

import {Centered} from 'layouts';

export default class Spinner extends Component {

  render() {
    return <Centered>
      <div className='spinner'>
        <div className='bounce1'></div>
        <div className='bounce2'></div>
        <div className='bounce3'></div>
      </div>
    </Centered>;
  }

}
