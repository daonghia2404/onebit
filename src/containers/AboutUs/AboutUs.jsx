import React from 'react';

import Button from '@/components/Button';

import { dataAboutUs } from './AboutUs.data';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <section className="AboutUs">
      <div className="container">
        <div className="AboutUs-wrapper">
          <div className="AboutUs-header">
            <h3 className="AboutUs-subtitle subheading">About us</h3>
            <h2 className="AboutUs-title big-title-02">Main Products and Services</h2>
            <p className="AboutUs-description heading-02">
              Chúng tôi vô cùng tự hào khi được giúp đỡ các thành viên trong hệ sinh thái Onebit tiếp cận với các nền
              tảng đầu tư theo cách dễ dàng nhất, an toàn nhất và hiệu quả nhất.
            </p>
          </div>

          <div className="AboutUs-body">
            {dataAboutUs.map((item, index) => (
              <div key={index} className="AboutUs-body-item">
                <div className="AboutUs-body-item-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="AboutUs-body-item-info">
                  <h5 className="AboutUs-body-item-info-title heading-01">{item.title}</h5>
                  <p className="AboutUs-body-item-info-description description-02">{item.description}</p>
                  <div className="AboutUs-body-item-info-btn flex">
                    <Button title="More Detail" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
