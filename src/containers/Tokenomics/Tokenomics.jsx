import React from 'react';

import ImageChart from '@/assets/images/image-tokenomics-chart.png';

import './Tokenomics.scss';

const Tokenomics = () => {
  return (
    <div className="Tokenomics">
      <div className="container">
        <div className="Tokenomics-wrapper">
          <div className="Tokenomics-header">
            <div className="Tokenomics-subtitle subheading">TOKENOMICS</div>
            <div className="Tokenomics-title big-title-02">The real value</div>
          </div>

          <div className="Tokenomics-chart">
            <div className="Tokenomics-chart-title heading-02">TOKEN METRICS Onebit ventures</div>
            <div className="Tokenomics-chart-value heading-02">28.000.000</div>
            <div className="Tokenomics-chart-image">
              <img src={ImageChart} alt="" />
            </div>
          </div>

          <div className="Tokenomics-list">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className="Tokenomics-list-item flex items-center justify-between">
                <div className="Tokenomics-list-item-col">
                  <div className="Tokenomics-list-item-text small-link-text">
                    <span>1%</span>
                    Seed sale
                  </div>
                  <div className="Tokenomics-list-item-text body-02">
                    Unlock 1% at TGE, 3 months lock, then linear monthly in 18 month.
                  </div>
                </div>
                <div className="Tokenomics-list-item-col">
                  <div className="Tokenomics-list-item-text small-caption">Tokens</div>
                  <div className="Tokenomics-list-item-text small-caption">280.000</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
