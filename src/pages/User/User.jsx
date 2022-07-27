import React, { useEffect } from 'react';

import { scrollToTop } from '@/utils/functions';
import Header from '@/containers/Header';
import Ranking from '@/containers/Ranking';
import TokenOwner from '@/containers/TokenOwner';

const User = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="User">
      <Header title="User" />
      <Ranking />
      <TokenOwner />
    </div>
  );
};

export default User;
