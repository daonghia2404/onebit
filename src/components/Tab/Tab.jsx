import React, { useState } from 'react';
import classNames from 'classnames';

import './Tab.scss';

const Tab = ({ className, defaultActiveKey, data = [] }) => {
  const [activeKeyTab, setActiveKeyTab] = useState(defaultActiveKey);

  const handleChangeActiveTab = (key) => {
    setActiveKeyTab(key);
  };

  return (
    <div className={classNames('Tab', className)}>
      <div className="Tab-tabs flex">
        {data.map((item) => (
          <div
            key={item.value}
            className={classNames('Tab-tabs-item heading-02', { active: item.value === activeKeyTab })}
            onClick={() => handleChangeActiveTab(item.value)}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="Tab-tabs-main">{data.find((item) => item.value === activeKeyTab)?.children}</div>
    </div>
  );
};

export default Tab;
