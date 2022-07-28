import React from 'react';

import ImageAvatar from '@/assets/images/image-avatar.png';
import Carousels from '@/components/Carousels';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { BREAKPOINT } from '@/redux/reducers/ui';

import './Teams.scss';

const Teams = () => {
  return (
    <div className="Teams">
      <div className="container">
        <div className="Teams-wrapper">
          <div className="Teams-header">
            <div className="Teams-subtitle subheading">Teams</div>
            <div className="Teams-title big-title-02">Meet our team of experts</div>
          </div>

          <Carousels
            className="Teams-carousel"
            variableWidth
            centerMode
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay
            responsive={[
              {
                breakpoint: BREAKPOINT,
                settings: {
                  variableWidth: false,
                },
              },
            ]}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="Teams-carousel-item">
                <div className="Teams-carousel-item-avatar">
                  <img src={ImageAvatar} alt="" />
                </div>
                <div className="Teams-carousel-item-name heading-03">Tony Ngo</div>
                <div className="Teams-carousel-item-job small-link-text">CEO</div>
                <div className="Teams-carousel-item-description description-02">
                  Co-Founder & CEO of TUN Travel. Tung Do has had over 20 years of experience in the travel industry.
                  With his knowledge and passion, Tung oversees all the business activities and operational processes.
                </div>
                <div className="Teams-carousel-item-socials flex justify-center">
                  <a href="#" target="_blank" className="Teams-carousel-item-socials-item">
                    <Icon name={EIconName.LinkedIn} color={EIconColor.PRIMARY_LC_6} />
                  </a>
                  <a href="#" target="_blank" className="Teams-carousel-item-socials-item">
                    <Icon name={EIconName.Twitter} color={EIconColor.PRIMARY_LC_6} />
                  </a>
                </div>
              </div>
            ))}
          </Carousels>
        </div>
      </div>
    </div>
  );
};

export default Teams;
