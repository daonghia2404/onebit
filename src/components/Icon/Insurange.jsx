import React from 'react';

import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className="stroke"
        d="M8.81944 19.2886C9.28775 20.1804 10.2228 20.7886 11.3 20.7886H14.5C16.1569 20.7886 17.5 19.4454 17.5 17.7886C17.5 16.1317 16.1569 14.7886 14.5 14.7886H11.5C9.84315 14.7886 8.5 13.4454 8.5 11.7886C8.5 10.1317 9.84315 8.78859 11.5 8.78859H14.7C15.7772 8.78859 16.7122 9.39683 17.1806 10.2886M13 6.53859V8.78859M13 20.7886V23.0386M25 15.5386C25 22.9013 16.9691 28.2562 14.047 29.9609C13.7149 30.1546 13.5489 30.2515 13.3145 30.3018C13.1327 30.3408 12.8673 30.3408 12.6855 30.3018C12.4511 30.2515 12.2851 30.1546 11.953 29.9609C9.03094 28.2562 1 22.9013 1 15.5386V8.365C1 7.16573 1 6.56609 1.19614 6.05065C1.36941 5.5953 1.65097 5.18901 2.01649 4.86689C2.43024 4.50225 2.9917 4.29171 4.11461 3.87062L12.1573 0.854605C12.4691 0.737664 12.6251 0.679193 12.7855 0.656014C12.9278 0.635455 13.0722 0.635455 13.2145 0.656014C13.3749 0.679193 13.5309 0.737664 13.8427 0.854605L21.8854 3.87062C23.0083 4.29171 23.5698 4.50225 23.9835 4.86689C24.349 5.18901 24.6306 5.5953 24.8039 6.05065C25 6.56609 25 7.16573 25 8.365V15.5386Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Svg;
