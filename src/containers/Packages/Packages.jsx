import React from 'react';
import { useSelector } from 'react-redux';

import Button from '@/components/Button';

import { dataPackages } from './Packages.data';
import './Packages.scss';

const Packages = () => {
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);

  return (
    <div className="Packages">
      <div className="container">
        <div className="Packages-wrapper">
          <div className="Packages-header">
            <div className="Packages-subtitle subheading">Packages</div>
            <div className="Packages-title big-title-02">What do you need? Choose a service that can help you</div>
          </div>

          <div className="Packages-body flex items-center justify-between">
            {dataPackages.map((item, index) => (
              <div key={index} className="Packages-body-col">
                <div className="Packages-body-item">
                  <div className="Packages-body-item-header flex justify-between">
                    <div className="Packages-body-item-header-title subheading uppercase">{item.title}</div>
                    <div className="Packages-body-item-header-price subheading">
                      <span className="small-link-text">Starting from</span>
                      <span className="heading-02">{item.value}</span>
                    </div>
                  </div>

                  <div className="Packages-body-item-list text-center">
                    <div className="Packages-body-item-list-item description-02">10 design pages</div>
                    <div className="Packages-body-item-list-item description-02">Well-documented</div>
                    <div className="Packages-body-item-list-item description-02">4 revisions</div>
                    <div className="Packages-body-item-list-item description-02">$100/additional page</div>
                  </div>

                  <div className="Packages-body-item-btn flex justify-center">
                    <Button title="More Detail" size={isMobile ? 'small' : 'middle'} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
