import React from 'react';

import { dataFollowChannel } from './FollowChannel.data';
import './FollowChannel.scss';

const FollowChannel = ({ showCount }) => {
  return (
    <div className="FollowChannel">
      {dataFollowChannel.map((item, index) => (
        <div key={index} className="FollowChannel-item flex items-center">
          <div className="FollowChannel-item-image">
            <img src={item.image} alt="" />
          </div>
          <div className="FollowChannel-item-text body-01">{item.label}</div>
          {showCount && <div className="FollowChannel-item-count heading-03">+10</div>}
        </div>
      ))}
    </div>
  );
};

export default FollowChannel;
