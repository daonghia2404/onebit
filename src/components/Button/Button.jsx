import React from 'react';
import { Button as AntdButton } from 'antd';
import classNames from 'classnames';
import { navigate } from '@reach/router';

import Icon from '@/components/Icon';

import './Button.scss';

const Button = ({
  className,
  size,
  iconName,
  shadow = true,
  iconColor,
  type = 'primary',
  htmlType,
  title,
  danger,
  reverse,
  link,
  disabled,
  loading,
  onClick,
}) => {
  const handleClickButton = () => {
    if (link) navigate(link);
    else onClick?.();
  };
  return (
    <div className={classNames('Button', className, { shadow, 'only-icon': !title && iconName, reverse })}>
      <AntdButton
        size={size}
        type={type}
        htmlType={htmlType}
        onClick={handleClickButton}
        danger={danger}
        disabled={disabled}
        loading={loading}
      >
        {iconName && (
          <div className="Button-icon">
            <Icon name={iconName} color={iconColor} />
          </div>
        )}
        <span className="Button-title button-label">{title}</span>
      </AntdButton>
    </div>
  );
};

export default Button;
