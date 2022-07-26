import React from 'react';
import classNames from 'classnames';
import { Radio as AntdRadio, Space } from 'antd';

import './Radio.scss';

const Radio = ({ className, options = [], onChange, value }) => {
  const handleRadioChange = (e) => {
    const { value: currentValue } = e.target;
    const option = options.find((item) => item.value === currentValue);
    if (option) onChange?.(option);
  };

  return (
    <div className={classNames('Radio', className)}>
      <AntdRadio.Group onChange={handleRadioChange} value={options.find((item) => item.value === value?.value)?.value}>
        <Space direction="vertical">
          {options.map((item) => (
            <AntdRadio key={item.value} value={item.value}>
              {item.label}
            </AntdRadio>
          ))}
        </Space>
      </AntdRadio.Group>
    </div>
  );
};

export default Radio;
