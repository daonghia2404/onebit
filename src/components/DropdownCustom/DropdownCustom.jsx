import React from 'react';
import { Dropdown as AntdDropdown } from 'antd';
import classNames from 'classnames';

import Button from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';
import { useSelector } from 'react-redux';

import './DropdownCustom.scss';

export const DropdownCustom = ({
  menu,
  menuTitle,
  visible,
  overlay,
  children,
  trigger,
  placement,
  overlayClassName,
  onVisibleChange,
}) => {
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);

  const isExistedMenu = menu && menu.length > 0;

  const handleVisibleChange = (currentVisible) => {
    onVisibleChange?.(currentVisible);
  };

  const overlayMenu = () => {
    return (
      <div className="DropdownCustom-menu">
        {menu?.map((item, index) => (
          <div key={index} className="DropdownCustom-menu-item" onClick={item.onClick}>
            <div className="DropdownCustom-menu-item-title body-02">{item.title}</div>
          </div>
        ))}
      </div>
    );
  };

  const antdDropdownProps = {
    placement,
    overlayClassName: classNames('DropdownCustom-overlay', overlayClassName),
    trigger: trigger || ['click'],
    onVisibleChange: handleVisibleChange,
  };

  return (
    <div className="DropdownCustom">
      <AntdDropdown
        {...antdDropdownProps}
        overlay={isExistedMenu ? overlayMenu() : overlay}
        openClassName="DropdownCustom-open"
      >
        <div className="DropdownCustom-body">
          {isExistedMenu ? (
            <div className="DropdownCustom-menu-wrapper">
              <Button
                reverse
                title={menuTitle}
                iconName={EIconName.ArrowUp}
                iconColor={EIconColor.PRIMARY_LC_8}
                size={isMobile ? 'small' : 'middle'}
              />
            </div>
          ) : (
            children
          )}
        </div>
      </AntdDropdown>
    </div>
  );
};

export default DropdownCustom;
