import React from 'react';

import Button from '@/components/Button';
import Icon, { EIconColor } from '@/components/Icon';

import { dataAbout } from './About.data';
import './About.scss';

const About = () => {
  return (
    <div className="About">
      <div className="container">
        <div className="About-wrapper">
          <div className="About-header">
            <div className="About-subtitle subheading">About</div>
            <div className="About-title big-title-02">
              In 3 years we reached 8 countries, 193 medias and earning $100B USD
            </div>
          </div>

          <div className="About-body flex items-center justify-between">
            {dataAbout.map((item, index) => (
              <div key={index} className="About-body-item flex items-center">
                <div className="About-body-item-icon">
                  <Icon name={item.icon} color={EIconColor.WHITE} />
                </div>
                <div className="About-body-item-info">
                  <div className="About-body-item-info-value heading-01">{item.value}</div>
                  <div className="About-body-item-info-title subheading">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
