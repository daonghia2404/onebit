import React, { useState } from 'react';

import Ended from '@/containers/List/Ended';
import Joined from '@/containers/List/Joined';
import Upcoming from '@/containers/List/Upcoming';
import Tab from '@/components/Tab';

import { EKeyListTab } from './List.data';
import './List.scss';

const List = () => {
  const dataListTabs = [
    { label: 'Upcoming', value: EKeyListTab.UPCOMING, children: <Upcoming /> },
    { label: 'Ended', value: EKeyListTab.ENDED, children: <Ended /> },
    { label: 'Joined', value: EKeyListTab.JOINED, children: <Joined /> },
  ];

  return (
    <div className="List">
      <div className="container">
        <div className="List-wrapper">
          <div className="List-header">
            <div className="List-subtitle subheading">List</div>
            <div className="List-title big-title-02">All past IDOs/SHO offerings that were hosted on launchpad.</div>
          </div>

          <div className="List-body">
            <Tab defaultActiveKey={EKeyListTab.UPCOMING} data={dataListTabs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
