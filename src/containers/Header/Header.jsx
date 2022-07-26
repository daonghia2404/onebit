import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { useSelector } from 'react-redux';

import Button from '@/components/Button';
import DropdownCustom from '@/components/DropdownCustom';
import Logo from '@/assets/images/logo.svg';
import { Paths } from '@/pages/routers';

import './Header.scss';

const Header = ({ title }) => {
  const [isLogged, setIsLogged] = useState(false);
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);

  const handleNavigate = (link) => {
    if (link) navigate(link);
  };

  const accountMenu = [
    {
      title: 'View profile',
      onClick: () => handleNavigate(),
    },
    {
      title: 'Refer',
      onClick: () => handleNavigate(),
    },
    {
      title: 'Log out',
      onClick: () => {},
    },
  ];

  return (
    <div className="Header">
      <div className="Header-wrapper flex items-center justify-between">
        <div className="Header-wrapper-item">
          <div className="Header-title heading-01">{title}</div>
          <Link to={Paths.Home} className="Header-logo">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="Header-wrapper-item">
          {isLogged ? (
            <DropdownCustom
              placement="bottomRight"
              trigger={['click']}
              menuTitle="0x15…eD07"
              menu={accountMenu}
              overlay={<div style={{ color: '#fff' }}>Aaaaaaa</div>}
            />
          ) : (
            <Button title="Connect wallet" size={isMobile ? 'small' : 'middle'} onClick={() => setIsLogged(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
