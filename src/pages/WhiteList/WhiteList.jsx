import React, { useEffect } from 'react';
import { navigate } from '@reach/router';

import { Paths } from '@/pages/routers';
import Header from '@/containers/Header';
import { scrollToTop } from '@/utils/functions';

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
    </div>
  );
};

export default WhiteList;
