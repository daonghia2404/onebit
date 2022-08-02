import React from 'react';

import Button from '@/components/Button';
import Icon, { EIconColor } from '@/components/Icon';

import { dataAbout } from './About.data';
import './About.scss';

const About = () => {
  return (
    <section className="About">
      <div className="container">
        <div className="About-wrapper">
          <div className="About-header">
            <h3 className="About-subtitle subheading">About</h3>
            <h2 className="About-title big-title-02">
              In 3 years we reached 8 countries, 193 medias and earning $100B USD
            </h2>
          </div>

          <div className="About-body flex items-center justify-between">
            {dataAbout.map((item, index) => (
              <div key={index} className="About-body-item flex items-center">
                <div className="About-body-item-icon">
                  <Icon name={item.icon} color={EIconColor.WHITE} />
                </div>
                <div className="About-body-item-info">
                  <div className="About-body-item-info-value heading-01">{item.value}</div>
                  <h4 className="About-body-item-info-title subheading">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
