import React from 'react';

import { dataFeatures } from './Features.data';
import './Features.scss';

const Features = () => {
  return (
    <section className="Features">
      <div className="Features-bg"></div>
      <div className="container">
        <div className="Features-wrapper">
          <div className="Features-header">
            <h3 className="Features-subtitle subheading">Features</h3>
            <h2 className="Features-title big-title-02">Why choose Onebit</h2>
          </div>

          <div className="Features-body flex flex-wrap">
            {dataFeatures.map((item, index) => (
              <div key={index} className="Features-body-col">
                <div className="Features-body-item">
                  <div className="Features-body-item-image">
                    <img src={item.image} alt="" />
                  </div>
                  <h4 className="Features-body-item-title heading-02">{item.title}</h4>
                  <p className="Features-body-item-description description-02">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
