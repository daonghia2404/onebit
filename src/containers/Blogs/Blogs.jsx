import React, { useState } from 'react';
import { Link } from '@reach/router';
import { useSelector } from 'react-redux';

import { Paths } from '@/pages/routers';
import Button from '@/components/Button';
import Carousels from '@/components/Carousels';

import './Blogs.scss';

const Blogs = () => {
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);

  return (
    <div className="Blogs">
      <div className="container">
        <div className="Blogs-wrapper">
          <div className="Blogs-header">
            <div className="Blogs-subtitle subheading">Blogs</div>
            <div className="Blogs-title big-title-02">Get precise knowledge wherever you are</div>
          </div>
          <div className="Blogs-wrapper-item">
            {isMobile ? (
              <Carousels
                className="Blogs-list"
                slidesToShow={2.1}
                dots={false}
                arrows={false}
                responsive={[
                  {
                    breakpoint: 991,
                    settings: {
                      infinite: true,
                      centerMode: true,
                      slidesToShow: 1.1,
                    },
                  },
                ]}
              >
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div key={index} className="Blogs-list-col">
                    <div key={index} className="Blogs-list-item">
                      <div className="Blogs-list-item-image"></div>
                      <Link to={Paths.Home} className="Blogs-list-item-title heading-03">
                        How to compress image size without losing quality
                      </Link>
                      <div className="Blogs-list-item-description headline">
                        Small images can speed up website load times
                      </div>
                    </div>
                  </div>
                ))}
              </Carousels>
            ) : (
              <div className="Blogs-list flex flex-wrap">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div className="Blogs-list-col">
                    <div key={index} className="Blogs-list-item">
                      <div className="Blogs-list-item-image"></div>
                      <Link to={Paths.Home} className="Blogs-list-item-title heading-03">
                        How to compress image size without losing quality
                      </Link>
                      <div className="Blogs-list-item-description headline">
                        Small images can speed up website load times
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="Blogs-wrapper-item">
            <div className="Blogs-button flex justify-center">
              <Button title="Load More" size={isMobile ? 'small' : 'middle'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
