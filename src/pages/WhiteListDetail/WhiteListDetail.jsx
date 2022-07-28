import React, { useEffect } from 'react';
import { navigate } from '@reach/router';

import { Paths } from '@/pages/routers';
import Header from '@/containers/Header';
import { scrollToTop } from '@/utils/functions';
import WhiteListDetailInfo from '@/containers/WhiteListDetailInfo';
import FollowChannel from '@/containers/FollowChannel';

const WhiteListDetail = () => {
  const handleNavigateBack = () => {
    navigate(Paths.WhiteList);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="WhiteListDetail">
      <Header title="WhiteList Detail" onBack={handleNavigateBack} />
      <WhiteListDetailInfo />
      <div className="container" style={{ paddingBottom: 80 }}>
        <FollowChannel showCount />
      </div>
    </div>
  );
};

export default WhiteListDetail;
