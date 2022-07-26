import React from 'react';

import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.231 27.0385V14.705H15.5591L16.2071 9.89835H11.2308V6.82952C11.2308 5.43789 11.6348 4.48957 13.7213 4.48957L16.3823 4.48838V0.189377C15.922 0.130905 14.3423 0 12.5048 0C8.66805 0 6.04138 2.23995 6.04138 6.35364V9.89835H1.70215V14.705H6.04138V27.0384H11.231V27.0385Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
