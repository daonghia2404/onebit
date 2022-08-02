import React from 'react';

import LogoGithub from '@/assets/images/logo-github.svg';
import LogoForbes from '@/assets/images/logo-forbes.svg';
import LogoGoogle from '@/assets/images/logo-google.svg';
import LogoMicrosoft from '@/assets/images/logo-microsoft.svg';
import LogoFacebook from '@/assets/images/logo-facebook.svg';
import Carousels from '@/components/Carousels';
import { BREAKPOINT } from '@/redux/reducers/ui';

import './Partner.scss';

const Partner = () => {
  return (
    <section className="Partner">
      <div className="container">
        <div className="Partner-wrapper">
          <Carousels
            className="Partner-list"
            infinite
            slidesToShow={5}
            dots={false}
            arrows={false}
            responsive={[
              {
                breakpoint: BREAKPOINT,
                settings: {
                  autoplay: true,
                  slidesToShow: 1,
                  centerMode: true,
                },
              },
            ]}
          >
            <div className="Partner-list-item">
              <img src={LogoGithub} alt="" />
            </div>
            <div className="Partner-list-item">
              <img src={LogoForbes} alt="" />
            </div>
            <div className="Partner-list-item">
              <img src={LogoGoogle} alt="" />
            </div>
            <div className="Partner-list-item">
              <img src={LogoMicrosoft} alt="" />
            </div>
            <div className="Partner-list-item">
              <img src={LogoFacebook} alt="" />
            </div>
          </Carousels>
        </div>
      </div>
    </section>
  );
};

export default Partner;
