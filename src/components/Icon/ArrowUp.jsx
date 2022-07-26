import React from 'react';

import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 12.5L10 7.5L5 12.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Svg;
