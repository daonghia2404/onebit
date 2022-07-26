import React from 'react';
import classNames from 'classnames';
import { useLocation } from '@reach/router';

import { dataNavigationMenu } from '@/containers/Navigation/Navigation.data';
import Icon, { EIconColor } from '@/components/Icon';

import './NavigationMobileList.scss';

const NavigationMobileList = ({ visibleMenu }) => {
  const { pathname } = useLocation();
  return (
    <div className={classNames('NavigationMobileList', { active: visibleMenu })}>
      {dataNavigationMenu.map((item, index) => (
        <div
          key={index}
          className={classNames('NavigationMobileList-item flex items-center', {
            active: pathname.includes(item.link),
          })}
        >
          <div className="NavigationMobileList-item-icon">
            <Icon name={item.icon} color={EIconColor.NEUTRAL_7} />
          </div>
          <div className="NavigationMobileList-item-title subheading">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default NavigationMobileList;
