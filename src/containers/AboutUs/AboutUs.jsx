import React from 'react';

import Button from '@/components/Button';

import { dataAboutUs } from './AboutUs.data';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="container">
        <div className="AboutUs-wrapper">
          <div className="AboutUs-header">
            <div className="AboutUs-subtitle subheading">About us</div>
            <div className="AboutUs-title big-title-02">Main Products and Services</div>
            <div className="AboutUs-description heading-02">
              Chúng tôi vô cùng tự hào khi được giúp đỡ các thành viên trong hệ sinh thái Onebit tiếp cận với các nền
              tảng đầu tư theo cách dễ dàng nhất, an toàn nhất và hiệu quả nhất.
            </div>
          </div>

          <div className="AboutUs-body">
            {dataAboutUs.map((item, index) => (
              <div key={index} className="AboutUs-body-item">
                <div className="AboutUs-body-item-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="AboutUs-body-item-info">
                  <div className="AboutUs-body-item-info-title heading-01">{item.title}</div>
                  <div className="AboutUs-body-item-info-description description-02">{item.description}</div>
                  <div className="AboutUs-body-item-info-btn flex">
                    <Button title="More Detail" />
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

export default AboutUs;
