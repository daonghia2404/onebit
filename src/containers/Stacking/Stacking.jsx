import React from 'react';
import { useSelector } from 'react-redux';

import Button from '@/components/Button';

import { dataStacking } from './Stacking.data';
import './Stacking.scss';

const Stacking = () => {
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);

  return (
    <div className="Stacking">
      <div className="container">
        <div className="Stacking-wrapper">
          <div className="Stacking-header">
            <div className="Stacking-subtitle subheading">Stacking</div>
            <div className="Stacking-title big-title-02">Join IGO with 5 steps</div>
          </div>

          <div className="Stacking-body flex items-center justify-between flex-wrap">
            {dataStacking.map((item, index) => (
              <div key={index} className="Stacking-body-col">
                <div className="Stacking-body-item flex">
                  <div className="Stacking-body-item-wrapper flex items-center justify-between">
                    <div className="Stacking-body-item-info">
                      <div className="Stacking-body-item-info-step heading-01">{`0${index + 1}`}</div>
                      <div className="Stacking-body-item-info-title small-link-text">{item.title}</div>
                    </div>
                    <div className="Stacking-body-item-icon">
                      <img src={item.icon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="Stacking-btn flex justify-center">
            <Button title="Staking Now" size={isMobile ? 'small' : 'middle'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacking;
