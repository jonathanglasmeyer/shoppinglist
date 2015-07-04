import React from 'react';
import Tappable from 'react-tappable';
import {Style} from 'radium';

export default ({component, name, onClick, style, activeStyle, children}) => {
    const rules = {
      [`.${name}-active`]: activeStyle
    };

    return <div className='tappableWrapper'>
      <Style rules={rules}/>
      <Tappable
        className={name}
        classBase={name}
        component={component}
        style={style}
        onTap={onClick}
        preventDefault>

        {children}
      </Tappable>
  </div>;
};
