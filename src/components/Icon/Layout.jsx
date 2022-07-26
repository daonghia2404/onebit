import React from 'react';

import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M39.9163 6.25H10.7497C8.44849 6.25 6.58301 8.11548 6.58301 10.4167V39.5833C6.58301 41.8845 8.44849 43.75 10.7497 43.75H39.9163C42.2175 43.75 44.083 41.8845 44.083 39.5833V10.4167C44.083 8.11548 42.2175 6.25 39.9163 6.25Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6.58301 18.75H44.083" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.083 43.75V18.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Svg;
