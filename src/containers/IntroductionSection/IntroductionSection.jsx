import React from 'react';

import BgNews from '@/assets/images/bg-news.png';

import './IntroductionSection.scss';

const IntroductionSection = ({ image, title, description }) => {
  return (
    <div className="IntroductionSection">
      <div className="IntroductionSection-bg">
        <img src={BgNews} alt="" />
      </div>
      <div className="container">
        <div className="IntroductionSection-wrapper flex items-center justify-between">
          <div className="IntroductionSection-wrapper-item">
            <div className="IntroductionSection-image">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="IntroductionSection-wrapper-item">
            <div className="IntroductionSection-title big-title-01">{title}</div>

            <div className="IntroductionSection-description description-02">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
