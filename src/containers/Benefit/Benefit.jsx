import React from 'react';
import { useSelector } from 'react-redux';

import Icon, { EIconColor } from '@/components/Icon';
import Carousels from '@/components/Carousels';

import { dataBenefit } from './Benefit.data';
import './Benefit.scss';

const Benefit = () => {
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);

  return (
    <section className="Benefit">
      <div className="container">
        <div className="Benefit-wrapper">
          <div className="Benefit-header">
            <h3 className="Benefit-subtitle subheading">Benefit</h3>
            <h2 className="Benefit-title big-title-02">
              Projects in ONEBIT Onebit Labs will receive the following benefits
            </h2>
          </div>

          {isMobile ? (
            <Carousels
              className="Benefit-body"
              slidesToShow={1}
              centerMode
              autoplay
              dots={false}
              arrows={false}
              infinite={false}
            >
              {dataBenefit.map((item, index) => (
                <div key={index} className="Benefit-body-col">
                  <div className="Benefit-body-item">
                    <div className="Benefit-body-item-icon">
                      <Icon name={item.icon} color={EIconColor.WHITE} />
                    </div>
                    <div className="Benefit-body-item-info">
                      <p className="Benefit-body-item-info-title description-02">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousels>
          ) : (
            <div className="Benefit-body flex flex-wrap">
              {dataBenefit.map((item, index) => (
                <div key={index} className="Benefit-body-col">
                  <div className="Benefit-body-item">
                    <div className="Benefit-body-item-icon">
                      <Icon name={item.icon} color={EIconColor.WHITE} />
                    </div>
                    <div className="Benefit-body-item-info">
                      <div className="Benefit-body-item-info-title description-02">{item.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Benefit;
