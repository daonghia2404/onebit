import React from 'react';

import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className="stroke"
        d="M25 28.131C25 26.0376 25 24.991 24.7416 24.1393C24.1599 22.2217 22.6593 20.721 20.7417 20.1393C19.89 19.881 18.8433 19.881 16.75 19.881H9.25001C7.15666 19.881 6.10998 19.881 5.25829 20.1393C3.34068 20.721 1.84006 22.2217 1.25836 24.1393C1 24.991 1 26.0376 1 28.131M19.75 7.88098C19.75 11.6089 16.7279 14.631 13 14.631C9.27208 14.631 6.25 11.6089 6.25 7.88098C6.25 4.15306 9.27208 1.13098 13 1.13098C16.7279 1.13098 19.75 4.15306 19.75 7.88098Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Svg;
