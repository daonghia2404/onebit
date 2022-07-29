import React from 'react';
import classNames from 'classnames';

import './IntroductionSection.scss';

const IntroductionSection = ({ image, title, description, link, reverse }) => {
  return (
    <div className="IntroductionSection">
      <div className="container">
        <div className={classNames('IntroductionSection-wrapper flex items-center justify-between', { reverse })}>
          <div className="IntroductionSection-wrapper-item">
            <div className="IntroductionSection-image">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="IntroductionSection-wrapper-item">
            <div className="IntroductionSection-title big-title-01">{title}</div>

            <div className="IntroductionSection-description description-02">{description}</div>
            {link && (
              <a href={link.link} className="IntroductionSection-link description-02">
                {link.title}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
