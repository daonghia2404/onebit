import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navigation from '@/containers/Navigation';
import NavigationMobile from '@/containers/NavigationMobile';
import NavigationMobileList from '@/containers/NavigationMobile/NavigationMobileList';
import { initBackgroundAnimate } from '@/utils/functions';

import './Guest.scss';
import { uiActions } from '@/redux/actions';

const Guest = ({ children }) => {
  const dispatch = useDispatch();

  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const visibleMenuState = useSelector((state) => state.uiReducer.visibleMenu);

  const handleToggleVisibleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  const handleCloseVisibleMenu = () => {
    setVisibleMenu(false);
  };

  useEffect(() => {
    setTimeout(() => {
      initBackgroundAnimate();
    }, 1000);
  }, []);

  useEffect(() => {
    dispatch(uiActions.setVisibleMenu(visibleMenu));
  }, [visibleMenu]);

  useEffect(() => {
    setVisibleMenu(visibleMenuState);
  }, [visibleMenuState]);

  return (
    <div className="Guest">
      {isMobile ? (
        <>
          <NavigationMobileList visibleMenu={visibleMenu} onClose={handleCloseVisibleMenu} />
          <div className="Guest-sidebar-mobile">
            <NavigationMobile
              visibleMenu={visibleMenu}
              onOpenMenu={handleToggleVisibleMenu}
              onCloseMenu={handleCloseVisibleMenu}
            />
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
