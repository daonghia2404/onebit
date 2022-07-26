import React from 'react';
import { Link } from '@reach/router';

import BgFooter from '@/assets/images/bg-footer.png';
import Logo from '@/assets/images/logo.svg';
import Icon, { EIconColor } from '@/components/Icon';
import { dataSocials } from '@/containers/Footer/Footer.data';
import { Paths } from '@/pages/routers';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-bg">
        <img src={BgFooter} alt="" />
      </div>
      <div className="container">
        <div className="Footer-wrapper flex items-center justify-between">
          <div className="Footer-wrapper-item">
            <Link to={Paths.Home} className="Footer-logo">
              <img src={Logo} alt="" />
            </Link>
            <div className="Footer-text description-01">134 7th street, Go Vap District, Ho Chi Minh City, Vietnam</div>
          </div>
          <div className="Footer-wrapper-item">
            <div className="Footer-text heading-03">Join Our Community</div>
            <div className="Footer-socials flex items-center justify-between">
              {dataSocials.map((item, index) => (
                <a key={index} href={item.link} className="Footer-socials-item" target="_blank">
                  <Icon name={item.icon} color={EIconColor.WHITE} />
                </a>
              ))}
            </div>
            <div className="Footer-copyright body-02">Copyright © 2022 Onebit Ventures. All Rights Reserved. </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
