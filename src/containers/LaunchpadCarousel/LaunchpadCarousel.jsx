import React, { useState } from 'react';
import classNames from 'classnames';

import BgNews from '@/assets/images/bg-news.png';
import Carousels from '@/components/Carousels';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Paths } from '@/pages/routers';

import { dataLaunchDate } from './LaunchpadCarousel.data';
import './LaunchpadCarousel.scss';

const LaunchpadCarousel = () => {
  const [refCarousel, setRefCarousel] = useState(null);
  const [currentIndexCarousel, setCurrentIndexCarousel] = useState(0);

  const handleAfterChange = (index) => {
    setCurrentIndexCarousel(index);
  };

  const handleInitialCarousel = (ref) => {
    setRefCarousel(ref);
  };
  return (
    <div className="LaunchpadCarousel">
      <div className="container">
        <div className="LaunchpadCarousel-bg">
          <img src={BgNews} alt="" />
        </div>
        <div className="LaunchpadCarousel-wrapper">
          <div className="LaunchpadCarousel-carousel">
            <div className="LaunchpadCarousel-carousel-bg"></div>
            <Carousels
              onInit={handleInitialCarousel}
              slidesToShow={1}
              dots={false}
              arrows={false}
              autoplay
              afterChange={handleAfterChange}
            >
              {[1, 2, 3].map((item) => (
                <div key={item} className="LaunchpadCarousel-carousel-item">
                  <div className="LaunchpadCarousel-carousel-item-info">
                    <div className="LaunchpadCarousel-carousel-item-info-subtitle subheading">Featured token sales</div>
                    <div className="LaunchpadCarousel-carousel-item-info-title big-title-01">XANA</div>
                    <div className="LaunchpadCarousel-carousel-item-info-description description-02">
                      Several creative people gather in the same place - that's Collosal. We collaborate to produce the
                      best results, loved by clients and comfortable for users. Here we maintain togetherness even
                      though with different backgrounds, all the people here are already experts in their respective
                      fields.
                    </div>
                    <div className="LaunchpadCarousel-carousel-item-info-btn flex">
                      <Button title="More Detail" link={Paths.WhiteList} />
                    </div>
                  </div>
                </div>
              ))}
            </Carousels>

            <div className="LaunchpadCarousel-carousel-actions flex">
              <div className="LaunchpadCarousel-carousel-arrows flex items-center justify-around">
                <div className="LaunchpadCarousel-carousel-arrows-item" onClick={() => refCarousel.slickPrev()}>
                  <Icon name={EIconName.ArrowLeft} color={EIconColor.WHITE} />
                </div>
                <div className="LaunchpadCarousel-carousel-arrows-item" onClick={() => refCarousel.slickNext()}>
                  <Icon name={EIconName.ArrowRight} color={EIconColor.WHITE} />
                </div>
              </div>
              <div className="LaunchpadCarousel-carousel-actions-wrapper flex">
                {dataLaunchDate.map((item, index) => (
                  <div
                    key={index}
                    className={classNames('LaunchpadCarousel-carousel-action-item', {
                      active: currentIndexCarousel === index,
                    })}
                    onClick={() => refCarousel.slickGoTo(index)}
                  >
                    <div className="LaunchpadCarousel-carousel-action-item-title heading-03">{item.title}</div>
                    <div className="LaunchpadCarousel-carousel-action-item-description headline">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchpadCarousel;
