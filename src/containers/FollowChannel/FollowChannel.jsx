import React from 'react';
import { useEffect } from 'react';

import { dataFollowChannel } from './FollowChannel.data';
import './FollowChannel.scss';

const FollowChannel = ({ showCount }) => {
  function embedCompetition(el, html) {
    el.innerHTML = html;

    Array.from(el.querySelectorAll('script')).forEach((oldScript) => {
      const newScript = document.createElement('script');
      Array.from(oldScript.attributes).forEach((attr) => newScript.setAttribute(attr.name, attr.value));
      newScript.appendChild(document.createTextNode(oldScript.innerHTML));
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }

  const embedCode =
    '<a class="e-widget no-button" href="https://gleam.io/GRq5F/gleam-sweepstakes" rel="nofollow">My Competition</a><script type="text/javascript" src="https://widget.gleamjs.io/e.js" async="true"></script>';

  useEffect(() => {
    embedCompetition(document.querySelector('#gleam_competition'), embedCode);
  }, []);

  return (
    <section className="FollowChannel">
      {/* {dataFollowChannel.map((item, index) => (
        <div key={index} className="FollowChannel-item flex items-center">
          <div className="FollowChannel-item-image">
            <img src={item.image} alt="" />
          </div>
          <div className="FollowChannel-item-text body-01">{item.label}</div>
          {showCount && <div className="FollowChannel-item-count heading-03">+10</div>}
        </div>
      ))} */}

      <div id="gleam_competition"></div>
    </section>
  );
};

export default FollowChannel;
