import React, { useState } from 'react';
import { Link } from '@reach/router';
import { useSelector } from 'react-redux';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Paths } from '@/pages/routers';
import Button from '@/components/Button';
import Carousels from '@/components/Carousels';
import { BREAKPOINT } from '@/redux/reducers/ui';

import './News.scss';

const News = () => {
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);

  const [newsCarousel, setNewsCarousel] = useState(null);

  const handleInitialNewsCarousel = (ref) => {
    setNewsCarousel(ref);
  };

  const renderNewsActions = () => {
    return (
      <>
        <div className="News-carousel-arrows flex justify-between">
          <div className="News-carousel-arrows-item" onClick={() => newsCarousel.slickPrev()}>
            <Icon name={EIconName.ArrowLeft} color={EIconColor.WHITE} />
          </div>
          <div className="News-carousel-arrows-item" onClick={() => newsCarousel.slickNext()}>
            <Icon name={EIconName.ArrowRight} color={EIconColor.WHITE} />
          </div>
        </div>

        <div className="News-button flex justify-center">
          <Button title="Load More" size={isMobile ? 'small' : 'middle'} />
        </div>
      </>
    );
  };

  return (
    <section className="News">
      <div className="container">
        <div className="News-wrapper flex justify-between flex-wrap">
          <div className="News-wrapper-item">
            <Carousels
              className="News-list"
              slidesToShow={3}
              slidesToScroll={1}
              arrows={false}
              dots={false}
              infinite={false}
              onInit={handleInitialNewsCarousel}
              responsive={[
                {
                  breakpoint: 991,
                  settings: {
                    infinite: true,
                    centerMode: true,
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: BREAKPOINT,
                  settings: {
                    infinite: true,
                    centerMode: true,
                    slidesToShow: 3,
                  },
                },
              ]}
            >
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div key={index} className="News-list-item">
                  <div className="News-list-item-image"></div>
                  <h4 className="News-list-item-title heading-03">
                    <Link to={Paths.Home}>How to compress image size without losing quality</Link>
                  </h4>

                  <p className="News-list-item-description headline">Small images can speed up website load times</p>
                </div>
              ))}
            </Carousels>

            {isMobile && renderNewsActions()}
          </div>
          <div className="News-wrapper-item">
            <h3 className="News-subtitle subheading">News</h3>
            <h2 className="News-title big-title-02">Hot news update today</h2>
            {!isMobile && renderNewsActions()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
