import React from 'react';

import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.3333 45.8333C36.8393 45.8333 46.1667 36.5059 46.1667 25C46.1667 13.494 36.8393 4.16663 25.3333 4.16663C13.8274 4.16663 4.5 13.494 4.5 25C4.5 36.5059 13.8274 45.8333 25.3333 45.8333Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.333 12.5V25L33.6663 29.1667"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Svg;
