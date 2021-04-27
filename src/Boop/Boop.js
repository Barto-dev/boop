import React from 'react';
import {animated} from 'react-spring';
import {useBoop} from '../hooks/use-boop';

const Boop = ({children, ...boopconfig}) => {

  const [style, trigger] = useBoop(boopconfig);

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default Boop;
