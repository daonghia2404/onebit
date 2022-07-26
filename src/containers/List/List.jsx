import React, { useState } from 'react';
import classNames from 'classnames';

import Ended from '@/containers/List/Ended';
import Joined from '@/containers/List/Joined';
import Upcoming from '@/containers/List/Upcoming';

import { dataListTabs, EKeyListTab } from './List.data';
import './List.scss';

const List = () => {
  const [activeKeyTab, setActiveKeyTab] = useState(EKeyListTab.UPCOMING);

  const handleChangeActiveTab = (key) => {
    setActiveKeyTab(key);
  };

  return (
    <div className="List">
      <div className="container">
        <div className="List-wrapper">
          <div className="List-header">
            <div className="List-subtitle subheading">List</div>
            <div className="List-title big-title-02">All past IDOs/SHO offerings that were hosted on launchpad.</div>
          </div>

          <div className="List-body">
            <div className="List-tabs flex">
              {dataListTabs.map((item) => (
                <div
                  key={item.value}
                  className={classNames('List-tabs-item heading-02', { active: item.value === activeKeyTab })}
                  onClick={() => handleChangeActiveTab(item.value)}
                >
                  {item.label}
                </div>
              ))}
            </div>

            <div className="List-tabs-main">
              {activeKeyTab === EKeyListTab.UPCOMING && (
                <div className="List-tabs-main-item">
                  <Upcoming />
                </div>
              )}

              {activeKeyTab === EKeyListTab.ENDED && (
                <div className="List-tabs-main-item">
                  <Ended />
                </div>
              )}

              {activeKeyTab === EKeyListTab.JOINED && (
                <div className="List-tabs-main-item">
                  <Joined />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
