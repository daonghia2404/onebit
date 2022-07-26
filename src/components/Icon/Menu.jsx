import React from 'react';

import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className="stroke"
        d="M1.125 9H19.125M1.125 3H19.125M1.125 15H19.125"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Svg;
