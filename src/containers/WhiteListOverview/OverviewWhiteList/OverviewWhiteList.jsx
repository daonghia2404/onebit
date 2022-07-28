import React, { useState } from 'react';
import classNames from 'classnames';

import { dataOverviewWhiteListMenu } from './OverviewWhiteList.data';
import './OverviewWhiteList.scss';

const OverviewWhiteList = ({}) => {
  const [currentMenuTab, setCurrentMenuTab] = useState('general');

  return (
    <div className="OverviewWhiteList">
      <div className="OverviewWhiteList-wrapper flex flex-wrap">
        <div className="OverviewWhiteList-wrapper-item">
          <div className="OverviewWhiteList-menu">
            {dataOverviewWhiteListMenu.map((item) => (
              <div
                key={item.value}
                className={classNames('OverviewWhiteList-menu-item body-01', { active: currentMenuTab === item.value })}
                onClick={() => setCurrentMenuTab(item.value)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <div className="OverviewWhiteList-wrapper-item">
          <div className="OverviewWhiteList-content style-content">
            <h3 className="heading-03">How is the payment system?</h3>
            <p className="body-01">IP Driven</p>
            <p className="body-01">
              The platform establishes branding and global positioning by signing up contracts with world-renowned anime
              and gaming IPs to mint NFTs to attract followers from these IPs to XANA's platform.
            </p>
            <p className="body-01">
              Top IPs collaboration leads to more known IPs with a fanbase that wants to develop blockchain games. They
              can use XANA's platform and interfaces to complete their game development and tokenize the items quickly.
            </p>
            <p className="body-01">
              XANA already has several offers to build famous TV show games to convert into Metaverse NFT games within
              XANA.
            </p>
            <p className="body-01">Business partners</p>
            <p className="body-01">
              Their partner J&J is the joint venture by JTB, the largest tourism comapny Japan with 10 billion US$
              annual revenue worldwide, and JCB, the largest credit card comapny with 141 Million user generating 285
              Billion$ annual volume worldwide.
            </p>
            <p className="body-01">
              also their major media partner Fuji Media group is the largest media group in Japan.{' '}
            </p>
            <p className="body-01">Through those collaborations, XANA will gain great foundation of userbases.</p>
            <p className="body-01">SocialFi: KOLs</p>
            <p className="body-01">
              Involve KOL in an early stage with a special deal (revenue split) to provide the land and build their
              iconic worlds, organize virtual events to give them visualized topics to interact with their followers to
              join XANA to visit their lands. They also incentivize them according to the number of social engagements.
              Micro-influencers also have the opportunity to be rewarded by their social mining activities for Metaverse
              with driving traffic to Metaverse.
            </p>
            <p className="body-01">Create to Earn</p>
            <p className="body-01">
              XANA will incentivize game creator / env creator/avatar creators to develop NFT games, attractive news or
              events, adorable avatars, and wearables using SDK or builder of XANA's platform and interfaces to complete
              their development and tokenization of the items quickly.
            </p>
            <p className="body-01">Viral Video promotion</p>
            <p className="body-01">
              One of the key features is creating metaverse/avatar short movies like Tik-Tok. It motivates KOLs or
              general users to post funny content with their avatar and emotes (poses). This gains the endless
              opportunities that any of them become viral in social media as this is more eye catch than just influencer
              changing their profile picture to one of PFP NFTs.
            </p>
            <p className="body-01">Additional</p>

            <ul>
              <li className="body-01">Tik-Tok / Instagram / Youtube ads</li>
              <li className="body-01">Gamer influencer campaigns</li>
              <li className="body-01">Youtube reviews</li>
              <li className="body-01">WhatsApp chatbot messenger campaigns</li>
              <li className="body-01">WeChat KOLs & ad campaigns</li>
              <li className="body-01">Ad network, incentivized and non-incentivized traffic campaigns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewWhiteList;
