import React from 'react';

import { dataFollowChannel } from './FollowChannel.data';
import './FollowChannel.scss';

const FollowChannel = ({ showCount }) => {
  return (
    <section className="FollowChannel">
      {/* <a className="e-widget no-button" href="https://gleam.io/cJE66/onebit-giveaway" rel="nofollow">
        Onebit giveaway
      </a>
      <script type="text/javascript" src="https://widget.gleamjs.io/e.js" async /> */}
      {dataFollowChannel.map((item, index) => (
        <div key={index} className="FollowChannel-item flex items-center">
          <div className="FollowChannel-item-image">
            <img src={item.image} alt="" />
          </div>
          <div className="FollowChannel-item-text body-01">{item.label}</div>
          {showCount && <div className="FollowChannel-item-count heading-03">+10</div>}
        </div>
      ))}
    </section>
  );
};

export default FollowChannel;
