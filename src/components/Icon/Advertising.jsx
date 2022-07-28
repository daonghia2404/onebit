import React from 'react';

import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className="stroke"
        d="M22.6 12.6406C22.6 17.9426 18.3019 22.2406 13 22.2406M22.6 12.6406C22.6 7.33869 18.3019 3.04063 13 3.04063M22.6 12.6406H3.4M13 22.2406C7.69807 22.2406 3.4 17.9426 3.4 12.6406M13 22.2406C15.4012 19.6118 16.7665 16.2003 16.8407 12.6406C16.7665 9.08098 15.4012 5.66944 13 3.04063M13 22.2406C10.5988 19.6118 9.23482 16.2003 9.16066 12.6406C9.23482 9.08098 10.5988 5.66944 13 3.04063M3.4 12.6406C3.4 7.33869 7.69807 3.04063 13 3.04063M5.8 22.2406C5.8 23.5661 4.72548 24.6406 3.4 24.6406C2.07452 24.6406 1 23.5661 1 22.2406C1 20.9151 2.07452 19.8406 3.4 19.8406C4.72548 19.8406 5.8 20.9151 5.8 22.2406ZM25 22.2406C25 23.5661 23.9255 24.6406 22.6 24.6406C21.2745 24.6406 20.2 23.5661 20.2 22.2406C20.2 20.9151 21.2745 19.8406 22.6 19.8406C23.9255 19.8406 25 20.9151 25 22.2406ZM5.8 3.04063C5.8 4.36611 4.72548 5.44063 3.4 5.44063C2.07452 5.44063 1 4.36611 1 3.04063C1 1.71514 2.07452 0.640625 3.4 0.640625C4.72548 0.640625 5.8 1.71514 5.8 3.04063ZM25 3.04063C25 4.36611 23.9255 5.44063 22.6 5.44063C21.2745 5.44063 20.2 4.36611 20.2 3.04063C20.2 1.71514 21.2745 0.640625 22.6 0.640625C23.9255 0.640625 25 1.71514 25 3.04063Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Svg;