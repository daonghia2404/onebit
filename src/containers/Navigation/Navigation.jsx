import React from 'react';
import classNames from 'classnames';
import { navigate, useLocation } from '@reach/router';

import Favicon from '@/assets/images/favicon.svg';
import { dataNavigationMenu } from '@/containers/Navigation/Navigation.data';
import Icon, { EIconColor } from '@/components/Icon';

import './Navigation.scss';

const Navigation = () => {
  const { pathname } = useLocation();

  const handleNaviage = (link) => {
    navigate(link);
  };

  return (
    <div className="Navigation">
      <div className="Navigation-logo">
        <img src={Favicon} alt="" />
      </div>

      <div className="Navigation-list">
        {dataNavigationMenu.map((item, index) => (
          <div
            key={index}
            className={classNames('Navigation-list-item', { active: pathname.includes(item.link) })}
            onClick={() => handleNaviage(item.link)}
          >
            <div className="Navigation-list-item-icon">
              <Icon name={item.icon} color={EIconColor.NEUTRAL_7} />
            </div>
            <div className="Navigation-list-item-title menu-label">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
