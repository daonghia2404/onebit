import React from 'react';
import classNames from 'classnames';
import { navigate, useLocation } from '@reach/router';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Paths } from '@/pages/routers';

import './NavigationMobile.scss';

const NavigationMobile = ({ visibleMenu, onOpenMenu }) => {
  const { pathname } = useLocation();

  const dataNavigationMobileMenu = [
    {
      icon: EIconName.Launch,
      link: Paths.Launchpad,
      title: 'Lauchpad',
    },
    {
      icon: EIconName.Incubator,
      link: Paths.Incubator,
      title: 'Incubator',
    },
    {
      icon: EIconName.Advertising,
      link: Paths.Advertising,
      title: 'Advertising',
    },
    {
      icon: visibleMenu ? EIconName.X : EIconName.Menu,
      title: 'Menu',
      onClick: onOpenMenu,
    },
  ];

  const handleNaviage = (link) => {
    navigate(link);
  };

  return (
    <div className="NavigationMobile">
      <div className="NavigationMobile-wrapper flex">
        {dataNavigationMobileMenu.map((item, index) => (
          <div
            key={index}
            className={classNames('NavigationMobile-item flex flex-col items-center justify-center', {
              active: pathname.includes(item.link) || (item.icon === EIconName.Menu && visibleMenu),
            })}
            onClick={item.link ? () => handleNaviage(item.link) : item.onClick}
          >
            <div className="NavigationMobile-item-icon">
              <Icon name={item.icon} color={EIconColor.NEUTRAL_7} />
            </div>
            <div className="NavigationMobile-item-title menu-label">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationMobile;
