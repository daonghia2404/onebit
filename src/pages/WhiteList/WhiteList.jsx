import React, { useEffect } from 'react';
import { navigate } from '@reach/router';

import { Paths } from '@/pages/routers';
import Header from '@/containers/Header';
import { scrollToTop } from '@/utils/functions';
import WhiteListOverview from '@/containers/WhiteListOverview';
import WhiteListResponses from '@/containers/WhiteListResponses';
import WhiteListChannel from '@/containers/WhiteListChannel';

const WhiteList = () => {
  const handleNavigateBack = () => {
    navigate(Paths.Launchpad);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="WhiteList">
      <Header title="WhiteList" onBack={handleNavigateBack} />
      <WhiteListChannel isJoin />
      <WhiteListOverview />
      <WhiteListResponses />
    </div>
  );
};

export default WhiteList;
