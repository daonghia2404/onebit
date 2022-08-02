import React, { useState } from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Carousels from '@/components/Carousels';

import { dataPortfolioCarousel } from './Portfolio.data';
import './Portfolio.scss';

const Portfolio = () => {
  const [refCarousel, setRefCarousel] = useState(null);

  const handleInitialCarousel = (ref) => {
    setRefCarousel(ref);
  };

  return (
    <section className="Portfolio">
      <div className="container">
        <div className="Portfolio-wrapper">
          <div className="Portfolio-header">
            <h3 className="Portfolio-subtitle subheading">Portfolio</h3>
            <h2 className="Portfolio-title big-title-02">
              All projects launched. They all aim at long-term development and ensure benefits.
            </h2>
          </div>

          <div className="Portfolio-carousel">
            <Carousels onInit={handleInitialCarousel} dots arrows={false} infinite autoplay>
              {[1, 2, 3].map((wrapper) => (
                <div key={wrapper}>
                  <div className="Portfolio-carousel-item flex flex-wrap justify-between">
                    {dataPortfolioCarousel.map((item, index) => (
                      <div key={index} className="Portfolio-carousel-item-wrapper">
                        <div className="Portfolio-carousel-item-image">
                          <img src={item} alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Carousels>
          </div>

          <div className="Portfolio-carousel-actions flex items-center justify-between">
            <div className="Portfolio-carousel-actions-item"></div>
            <div className="Portfolio-carousel-actions-item">
              <div className="Portfolio-carousel-arrows flex justify-between">
                <div className="Portfolio-carousel-arrows-item" onClick={() => refCarousel.slickPrev()}>
                  <Icon name={EIconName.ArrowLeft} color={EIconColor.WHITE} />
                </div>
                <div className="Portfolio-carousel-arrows-item" onClick={() => refCarousel.slickNext()}>
                  <Icon name={EIconName.ArrowRight} color={EIconColor.WHITE} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
