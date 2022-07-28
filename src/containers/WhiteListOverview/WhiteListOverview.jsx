import React from 'react';

import Tab from '@/components/Tab';
import OverviewWhiteList from '@/containers/WhiteListOverview/OverviewWhiteList';

import { EKeyTabWhiteListOverview } from './WhiteListOverview.data';
import './WhiteListOverview.scss';

const WhiteListOverview = () => {
  const dataTabsWhiteListOverview = [
    {
      value: EKeyTabWhiteListOverview.OVERVIEW,
      label: 'Overview',
      children: <OverviewWhiteList />,
    },
    {
      value: EKeyTabWhiteListOverview.TEAM_AND_PARTNER,
      label: 'Team & Partners',
      children: <></>,
    },
    {
      value: EKeyTabWhiteListOverview.METRICS,
      label: 'Metrics',
      children: <></>,
    },
  ];

  return (
    <div className="WhiteListOverview">
      <div className="container">
        <div className="WhiteListOverview-wrapper">
          <Tab defaultActiveKey={EKeyTabWhiteListOverview.OVERVIEW} data={dataTabsWhiteListOverview} />
        </div>
      </div>
    </div>
  );
};

export default WhiteListOverview;
