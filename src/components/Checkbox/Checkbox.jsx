import React from 'react';
import classNames from 'classnames';
import { Checkbox as AntdCheckbox } from 'antd';

import './Checkbox.scss';

const Checkbox = ({ className, label, onChange, value }) => {
  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    onChange?.(checked);
  };

  return (
    <div className={classNames('Checkbox', className)}>
      <AntdCheckbox checked={value} onChange={handleCheckboxChange}>
        {label}
      </AntdCheckbox>
    </div>
  );
};

export default Checkbox;
