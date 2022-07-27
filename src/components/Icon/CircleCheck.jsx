import React from 'react';

import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M41.6376 18.1905C41.8755 19.4237 42 20.6973 42 22C42 33.0457 33.0457 42 22 42C10.9543 42 2 33.0457 2 22C2 10.9543 10.9543 2 22 2C26.2493 2 30.189 3.32519 33.4286 5.58483M41.9993 7.71475L21.9993 27.7148L13.4279 19.1433"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default Svg;
