import React from 'react';

import Table from '@/components/Table';
import { EIconColor } from '@/components/Icon';

import './Joined.scss';

const Joined = () => {
  const columns = [
    {
      key: 'projectName',
      dataIndex: 'projectName',
      title: 'Project Name',
    },
    {
      key: 'nextClaim',
      dataIndex: 'nextClaim',
      title: 'Next Claim',
    },
    {
      key: 'allocation',
      dataIndex: 'allocation',
      title: 'Allocation',
    },
    {
      key: 'claimed',
      dataIndex: 'claimed',
      title: 'Claimed',
    },
    {
      key: 'claimable',
      dataIndex: 'claimable',
      title: 'Claimable',
    },
  ];

  const dataSources = [
    {
      projectName: 'WingStep',
      nextClaim: '17h 30m UTC July 26, 2022',
      allocation: '9000 WST',
      claimed: '0 WST',
      claimable: '3000 WST',
    },
    {
      projectName: 'iStep',
      nextClaim: '21h 30m UTC July 26, 2022',
      allocation: '12000 ISTEP',
      claimed: '4000  ISTEP',
      claimable: '4000  ISTEP',
    },
    {
      projectName: 'Bikearn',
      nextClaim: '20h 30m UTC July 26, 2022 ',
      allocation: '5000 RTE',
      claimed: '0 RTE',
      claimable: '0 RTE',
    },
    {
      projectName: 'PyramidWalk',
      nextClaim: '2h 30m UTC July 27, 2022 ',
      allocation: '10,000 PYRA',
      claimed: '2,000 PYRA',
      claimable: '5,000 PYRA',
    },
    {
      projectName: 'Bicyclefi',
      nextClaim: '10h 30m UTC July 28, 2022 ',
      allocation: '9,000 BCF',
      claimed: '2,000 BCF',
      claimable: '0 BCF',
    },
    {
      projectName: 'Run Together',
      nextClaim: '21h 30m UTC July 29, 2022 ',
      allocation: '6,000 RUN',
      claimed: '4,000 RUN',
      claimable: '2000 RUN',
    },
  ];

  return (
    <div className="Joined">
      <Table columns={columns} dataSources={dataSources} />
    </div>
  );
};

export default Joined;
