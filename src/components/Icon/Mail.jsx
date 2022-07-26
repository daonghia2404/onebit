import React from 'react';

import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 5.54053H25C26.375 5.54053 27.5 6.66553 27.5 8.04053V23.0405C27.5 24.4155 26.375 25.5405 25 25.5405H5C3.625 25.5405 2.5 24.4155 2.5 23.0405V8.04053C2.5 6.66553 3.625 5.54053 5 5.54053Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.5 8.04053L15 16.7905L2.5 8.04053"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Svg;
