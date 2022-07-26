import React from 'react';

import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_582_5095)">
        <path
          d="M8.57778 0.288574C13.0234 0.288574 16.627 3.84738 16.627 8.23709C16.627 12.6268 13.0231 16.1853 8.57778 16.1853C4.13244 16.1853 0.52832 12.6268 0.52832 8.23709C0.52832 3.84738 4.13217 0.288574 8.57778 0.288574ZM21.4322 0.754178C23.655 0.754178 25.4569 4.10405 25.4569 8.23709H25.4572C25.4572 12.369 23.6553 15.72 21.4325 15.72C19.2097 15.72 17.4077 12.369 17.4077 8.23709C17.4077 4.10513 19.2094 0.754178 21.4322 0.754178ZM27.6535 1.53358C28.4351 1.53358 29.069 4.53479 29.069 8.23709C29.069 11.9383 28.4353 14.9406 27.6535 14.9406C26.8716 14.9406 26.2382 11.9391 26.2382 8.23709C26.2382 4.53506 26.8719 1.53358 27.6535 1.53358Z"
          fill={color}
          className="fill"
        />
      </g>
      <defs>
        <clipPath id="clip0_582_5095">
          <rect width="28.5407" height="15.9634" fill={color} transform="translate(0.52832 0.288574)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Svg;
