import React from 'react';

import Tab from '@/components/Tab';
import StakeStep from '@/containers/StakeStep';

import { EKeyStakeTabs } from './StakeTabs.data';
import './StakeTabs.scss';

const StakeTabs = () => {
  const dataStakeTabs = [
    { value: EKeyStakeTabs.STAKE, label: 'Stake', children: <StakeStep /> },
    { value: EKeyStakeTabs.UNSTAKE, label: 'Unstake', children: <></> },
    { value: EKeyStakeTabs.RANKING, label: 'Ranking', children: <></> },
  ];

  return (
    <div className="StakeTabs">
      <div className="container">
        <div className="StakeTabs-wrapper">
          <Tab defaultActiveKey={EKeyStakeTabs.STAKE} data={dataStakeTabs} />
        </div>
      </div>
    </div>
  );
};

export default StakeTabs;
