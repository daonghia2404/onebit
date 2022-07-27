import React from 'react';

import Table from '@/components/Table';

import './ReferralList.scss';

const ReferralList = () => {
  const columns = [
    {
      key: 'referee',
      dataIndex: 'referee',
      title: 'Referee',
    },
    {
      key: 'refereeId',
      dataIndex: 'refereeId',
      title: 'Referee ID',
    },
    {
      key: 'time',
      dataIndex: 'time',
      title: 'Time',
    },
    {
      key: 'rewardAmount',
      dataIndex: 'rewardAmount',
      title: 'Reward Amount',
    },
  ];

  const dataSources = [
    {
      referee: 'Dj****0@**.com',
      refereeId: '13604835',
      time: '2022-06-22 14:04:22',
      rewardAmount: '0.01 BUSD',
    },
    {
      referee: 'ha****3(0**.com',
      refereeId: '61682572',
      time: '2022-06-21 23:23:31',
      rewardAmount: '0.01 BUSD',
    },
    {
      referee: 'ng**u@*.com',
      refereeId: '88375100',
      time: '2022-06-21 23:13:22',
      rewardAmount: '0.012 BUSD',
    },
    {
      referee: 'th****4@*.com',
      refereeId: '73022239',
      time: '2022-06-21 23:19:04',
      rewardAmount: '0.012 BUSD',
    },
    {
      referee: 'mi****c@**.com',
      refereeId: '67965445',
      time: '2022-06-21 23:18:24',
      rewardAmount: '0.0025 BUSD',
    },
    {
      referee: 'nt****@**.',
      refereeId: '00554399',
      time: '2022-06-21 23:23:31',
      rewardAmount: '0.01 BUSD',
    },
  ];

  return (
    <div className="ReferralList">
      <Table columns={columns} dataSources={dataSources} />
    </div>
  );
};

export default ReferralList;
