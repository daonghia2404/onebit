import React from 'react';
import classNames from 'classnames';

import './Progress.scss';

const Progress = ({ className, placement, showLabel, value }) => {
  return (
    <div className={classNames('Progress flex items-center', className)}>
      <div className="Progress-bar">
        <div className="Progress-bar-value" style={{ width: `${value}%` }} />
      </div>
      {showLabel && <div className={classNames('Progress-label', placement)}>{`${value}%`}</div>}
    </div>
  );
};

export default Progress;
