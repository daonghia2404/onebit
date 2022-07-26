import React from 'react';

import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M47.9163 12.5L28.1247 32.2917L17.708 21.875L2.08301 37.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M35.417 12.5H47.917V25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Svg;
