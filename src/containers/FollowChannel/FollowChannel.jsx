import React from 'react';

import { dataFollowChannel } from './FollowChannel.data';
import './FollowChannel.scss';

const FollowChannel = () => {
  return (
    <div className="FollowChannel">
      {dataFollowChannel.map((item, index) => (
        <div key={index} className="FollowChannel-item flex items-center">
          <div className="FollowChannel-item-image">
            <img src={item.image} alt="" />
          </div>
          <div className="FollowChannel-item-text body-01">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default FollowChannel;
