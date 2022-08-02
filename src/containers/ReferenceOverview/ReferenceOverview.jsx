import React from 'react';

import Tab from '@/components/Tab';

import Overview from '@/containers/ReferenceOverview/Overview/Overview';
import ReferralList from '@/containers/ReferenceOverview/ReferralList';

import { EKeyTabReferenceOverview } from './ReferenceOverview.data';
import './ReferenceOverview.scss';

const ReferenceOverview = () => {
  const dataReferenceOverviewTabs = [
    {
      label: 'Overview',
      value: EKeyTabReferenceOverview.OVERVIEW,
      children: <Overview />,
    },
    {
      label: 'Referral List',
      value: EKeyTabReferenceOverview.REFERRAL_LIST,
      children: <ReferralList />,
    },
  ];

  return (
    <section className="ReferenceOverview">
      <div className="container">
        <div className="ReferenceOverview-wrapper">
          <Tab defaultActiveKey={EKeyTabReferenceOverview.OVERVIEW} data={dataReferenceOverviewTabs} />
        </div>
      </div>
    </section>
  );
};

export default ReferenceOverview;
