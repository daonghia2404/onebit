import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import classNames from 'classnames';

import { EFormat } from '@/common/enums';

import './DatePicker.scss';

const DatePicker = ({ className, value, placeholder, disabled, disabledDate, onChange }) => {
  return (
    <div className={classNames('DatePicker', className)}>
      <AntdDatePicker
        format={EFormat.DATE}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        disabledDate={disabledDate}
      />
    </div>
  );
};

export default DatePicker;
