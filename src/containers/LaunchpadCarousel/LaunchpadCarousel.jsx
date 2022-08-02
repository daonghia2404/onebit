import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import Carousels from '@/components/Carousels';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Paths } from '@/pages/routers';

import { dataLaunchDate } from './LaunchpadCarousel.data';
import './LaunchpadCarousel.scss';

const LaunchpadCarousel = () => {
  const [refCarousel, setRefCarousel] = useState(null);
  const [currentIndexCarousel, setCurrentIndexCarousel] = useState(0);
  const wrapperRef = useRef();

  const handleAfterChange = (index) => {
    setCurrentIndexCarousel(index);
  };

  const handleInitialCarousel = (ref) => {
    setRefCarousel(ref);
  };

  useEffect(() => {
    if (wrapperRef?.current) {
      const wrapper = wrapperRef?.current;
      const items = wrapper.querySelectorAll('.LaunchpadCarousel-carousel-action-item');
      wrapper.scrollLeft = items[currentIndexCarousel].offsetLeft;
    }
  }, [currentIndexCarousel]);

  return (
    <section className="LaunchpadCarousel">
      <div className="container">
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
                    <h3 className="LaunchpadCarousel-carousel-item-info-subtitle subheading">Featured token sales</h3>
                    <h2 className="LaunchpadCarousel-carousel-item-info-title big-title-01">XANA</h2>
                    <p className="LaunchpadCarousel-carousel-item-info-description description-02">
                      Several creative people gather in the same place - that's Collosal. We collaborate to produce the
                      best results, loved by clients and comfortable for users. Here we maintain togetherness even
                      though with different backgrounds, all the people here are already experts in their respective
                      fields.
                    </p>
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
              <div ref={wrapperRef} className="LaunchpadCarousel-carousel-actions-wrapper flex">
                {dataLaunchDate.map((item, index) => (
                  <div
                    key={index}
                    className={classNames('LaunchpadCarousel-carousel-action-item', {
                      active: currentIndexCarousel === index,
                    })}
                    onClick={() => refCarousel.slickGoTo(index)}
                  >
                    <h4 className="LaunchpadCarousel-carousel-action-item-title heading-03">{item.title}</h4>
                    <p className="LaunchpadCarousel-carousel-action-item-description headline">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchpadCarousel;
