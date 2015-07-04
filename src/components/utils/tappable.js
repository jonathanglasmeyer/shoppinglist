import React from 'react';
import Tappable from 'react-tappable';
import {Style} from 'radium';

export default ({
  component,
  noTouchColor,
  name,
  onClick,
  style,
  activeStyle,
  children
}) => {
    const rules = {[`.${name}-active`]: activeStyle};

    return noTouchColor ? React.createElement(component, {style, onClick}, children) :
      <div className='tappableWrapper'>
      {!noTouchColor && <Style rules={rules}/>}
      <Tappable
        className={noTouchColor ? '' : name}
        classBase={noTouchColor ? '' : name}
        component={component}
        style={style}
        onTap={onClick} >

        {children}
      </Tappable>
  </div>;
};
