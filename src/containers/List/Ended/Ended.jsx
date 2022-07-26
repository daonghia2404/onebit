import React from 'react';

import Table from '@/components/Table';
import { EIconColor } from '@/components/Icon';

import './Ended.scss';

const Ended = () => {
  const columns = [
    {
      key: 'projectName',
      dataIndex: 'projectName',
      title: 'Project Name',
    },
    {
      key: 'chain',
      dataIndex: 'chain',
      title: 'Project Name',
    },
    {
      key: 'token',
      dataIndex: 'token',
      title: 'Project Name',
    },
    {
      key: 'swapRate',
      dataIndex: 'swapRate',
      title: 'Project Name',
    },
    {
      key: 'currentPrice',
      dataIndex: 'currentPrice',
      title: 'Project Name',
    },
    {
      key: 'roi',
      dataIndex: 'roi',
      title: 'ROI',
      render: (value) => (
        <span style={{ color: value.length < 7 ? EIconColor.DANGER_2 : EIconColor.SUCCESS_2 }}>{value}</span>
      ),
    },
  ];

  const dataSources = [
    {
      projectName: 'WingStep',
      chain: 'BSC',
      token: 'WST',
      swapRate: '0.01 BUSD',
      currentPrice: '0.015136',
      roi: '151.36%',
    },
    {
      projectName: 'iStep',
      chain: 'BSC',
      token: 'ISTEP',
      swapRate: '0.01 BUSD',
      currentPrice: '0.01800184',
      roi: '180.02%',
    },
    {
      projectName: 'Bikearn',
      chain: 'BSC',
      token: 'RTE',
      swapRate: '0.012 BUSD',
      currentPrice: '0.006598',
      roi: '54.98%',
    },
    {
      projectName: 'PyramidWalk',
      chain: 'BSC',
      token: 'PYRA',
      swapRate: '0.012 BUSD',
      currentPrice: '0.009739',
      roi: '81.16%',
    },
    {
      projectName: 'Bicyclefi',
      chain: 'BSC',
      token: 'BCF',
      swapRate: '0.0025 BUSD',
      currentPrice: '0.00232913',
      roi: '93.17%',
    },
    {
      projectName: 'Run Together',
      chain: 'BSC',
      token: 'RUN',
      swapRate: '0.01 BUSD',
      currentPrice: '0.03629921',
      roi: '362.99%',
    },
  ];
  return (
    <div className="Ended">
      <Table columns={columns} dataSources={dataSources} />
    </div>
  );
};

export default Ended;
