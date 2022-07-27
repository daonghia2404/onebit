import React, { useEffect } from 'react';

import { scrollToTop } from '@/utils/functions';
import Header from '@/containers/Header';
import Ranking from '@/containers/Ranking';
import StakeTabs from '@/containers/StakeTabs';

const Stake = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="Stake">
      <Header title="Stake" />
      <Ranking />
      <StakeTabs />
    </div>
  );
};

export default Stake;
