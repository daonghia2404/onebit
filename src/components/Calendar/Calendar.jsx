import React from 'react';
import { Calendar as AntdCalendar } from 'antd';
import moment from 'moment';

import './Calendar.scss';

const Calendar = ({ value, dateCellRender, onChange }) => {
  const format = 'MMM, YYYY';

  const currentMonthValue = moment(value);
  const currentMonthFormat = currentMonthValue.format(format);

  const nextMonthValue = moment(value).add(1, 'month');
  const nextMonthFormat = nextMonthValue.format(format);

  const prevMonthValue = moment(value).subtract(1, 'month');
  const prevMonthFormat = prevMonthValue.format(format);

  const handleChangeCalendarValue = (changedValue) => {
    onChange?.(changedValue);
  };

  return (
    <div className="Calendar">
      <div className="Calendar-header flex items-center justify-between">
        <div
          className="Calendar-header-month heading-02 prev"
          onClick={() => handleChangeCalendarValue(prevMonthValue)}
        >
          {prevMonthFormat}
        </div>
        <div className="Calendar-header-month heading-02 current">{currentMonthFormat}</div>
        <div
          className="Calendar-header-month heading-02 next"
          onClick={() => handleChangeCalendarValue(nextMonthValue)}
        >
          {nextMonthFormat}
        </div>
      </div>
      <AntdCalendar value={value} dateCellRender={dateCellRender} headerRender={() => <></>} onSelect={onChange} />
    </div>
  );
};

export default Calendar;
