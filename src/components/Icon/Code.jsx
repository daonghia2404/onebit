import React from 'react';

import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34 37.5L46.5 25L34 12.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17.333 12.5L4.83301 25L17.333 37.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Svg;
