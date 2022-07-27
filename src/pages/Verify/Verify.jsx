import React, { useEffect } from 'react';
import { navigate } from '@reach/router';

import { scrollToTop } from '@/utils/functions';
import { Paths } from '@/pages/routers';
import Header from '@/containers/Header';
import VerifyStep from '@/containers/VerifyStep/VerifyStep';

const Verify = () => {
  const handleNavigateBack = () => {
    navigate(Paths.User);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="Verify">
      <Header title="Verify" onBack={handleNavigateBack} />
      <VerifyStep />
    </div>
  );
};

export default Verify;
