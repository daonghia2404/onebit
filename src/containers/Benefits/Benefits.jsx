import React from 'react';

import Button from '@/components/Button';

import { dataBenefits } from './Benefits.data';
import './Benefits.scss';

const Benefits = () => {
  return (
    <div className="Benefits">
      <div className="container">
        <div className="Benefits-wrapper">
          <div className="Benefits-header">
            <div className="Benefits-subtitle subheading">Benefits</div>
            <div className="Benefits-title big-title-02">Safe Haven</div>
          </div>

          <div className="Benefits-body">
            {dataBenefits.map((item, index) => (
              <div key={index} className="Benefits-body-item">
                <div className="Benefits-body-item-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="Benefits-body-item-info">
                  <div className="Benefits-body-item-info-title heading-01">{item.title}</div>
                  <div className="Benefits-body-item-info-description description-02">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
