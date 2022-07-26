import React, { useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

import ImageSelectedDate from '@/assets/images/image-selected-date.png';
import ImagePortfolio1 from '@/assets/images/image-portfolio-1.png';
import Calendar from '@/components/Calendar';

import './Upcoming.scss';

const Upcoming = () => {
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);

  const [calendarValue, setCalendarValue] = useState(moment().startOf('m'));

  const dateCellRender = (momentValue) => {
    const date = momentValue.date();
    const isEventDay = [4, 8, 12].includes(date);

    return isEventDay ? (
      <div className="Calendar-image">
        <img src={ImagePortfolio1} alt="" />
      </div>
    ) : (
      <></>
    );
  };

  return (
    <div className="Upcoming">
      <div className="Upcoming-calendar">
        <Calendar value={calendarValue} dateCellRender={dateCellRender} onChange={setCalendarValue} />
      </div>
      <div className="Upcoming-selected-date flex items-center">
        <div className="Upcoming-selected-date-image">
          <img src={ImageSelectedDate} alt="" />
        </div>
        <div className="Upcoming-selected-date-info">
          <div className="Upcoming-selected-date-info-title heading-03">
            Monitor your application when errors occur in production
          </div>
          <div className="Upcoming-selected-date-info-tags flex flex-wrap">
            {['IDO', 'NFT'].map((tag, tagInx) => (
              <div key={tagInx} className="Upcoming-selected-date-info-tags-item">
                {tag}
              </div>
            ))}
          </div>
          {!isMobile && <div className="Upcoming-selected-date-info-date headline">17h 30m UTC July 26, 2022 </div>}
        </div>
        {isMobile && <div className="Upcoming-selected-date-info-date headline">17h 30m UTC July 26, 2022 </div>}
      </div>
    </div>
  );
};

export default Upcoming;
