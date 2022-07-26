import React from 'react';

import { dataFeatures } from './Features.data';
import './Features.scss';

const Features = () => {
  return (
    <div className="Features">
      <div className="Features-bg"></div>
      <div className="container">
        <div className="Features-wrapper">
          <div className="Features-header">
            <div className="Features-subtitle subheading">Features</div>
            <div className="Features-title big-title-02">Why choose Onebit</div>
          </div>

          <div className="Features-body flex flex-wrap">
            {dataFeatures.map((item, index) => (
              <div key={index} className="Features-body-col">
                <div className="Features-body-item">
                  <div className="Features-body-item-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="Features-body-item-title heading-02">{item.title}</div>
                  <div className="Features-body-item-description description-02">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
