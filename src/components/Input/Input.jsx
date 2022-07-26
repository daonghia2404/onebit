import React from 'react';
import classNames from 'classnames';
import { Input as AntdInput } from 'antd';

import './Input.scss';

const Input = ({ className, type, size, placeholder, prefix, suffix, onChange, onEnter, value }) => {
  const handleKeydown = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      onEnter?.();
    }
  };

  return (
    <div className={classNames('Input', className, { affix: suffix || prefix })}>
      <AntdInput
        type={type}
        size={size}
        placeholder={placeholder}
        value={value}
        prefix={prefix}
        suffix={suffix}
        onChange={onChange}
        onKeyDown={handleKeydown}
      />
    </div>
  );
};

export default Input;
