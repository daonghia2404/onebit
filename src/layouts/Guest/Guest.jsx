import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Navigation from '@/containers/Navigation';
import NavigationMobile from '@/containers/NavigationMobile';
import NavigationMobileList from '@/containers/NavigationMobile/NavigationMobileList';
import { initBackgroundAnimate } from '@/utils/functions';

import './Guest.scss';

const Guest = ({ children }) => {
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);
  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleToggleVisibleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  useEffect(() => {
    initBackgroundAnimate();
  }, []);

  return (
    <div className="Guest">
      {isMobile ? (
        <>
          <NavigationMobileList visibleMenu={visibleMenu} onClose={() => setVisibleMenu(false)} />
          <div className="Guest-sidebar-mobile">
            <NavigationMobile visibleMenu={visibleMenu} onOpenMenu={handleToggleVisibleMenu} />
          </div>
        </>
      ) : (
        <div className="Guest-sidebar">
          <Navigation />
        </div>
      )}

      <div className="Guest-main">
        <div className="Guest-header"></div>
        <div className="Guest-body">{children}</div>
      </div>
    </div>
  );
};

export default Guest;
