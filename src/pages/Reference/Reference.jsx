import React, { useEffect } from 'react';
import { navigate } from '@reach/router';

import { Paths } from '@/pages/routers';
import Header from '@/containers/Header';
import Portfolio from '@/containers/Portfolio';
import IntroductionSection from '@/containers/IntroductionSection';
import ImageReference from '@/assets/images/image-reference.png';
import Receive from '@/containers/Receive';
import Benefits from '@/containers/Benefits';
import ReferenceOverview from '@/containers/ReferenceOverview';
import { scrollToTop } from '@/utils/functions';

const Reference = () => {
  const handleNavigateBack = () => {
    navigate(Paths.User);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="Reference">
      <Header title="Reference" onBack={handleNavigateBack} />
      <IntroductionSection
        image={ImageReference}
        title={
          <>
            Refer friends <br /> Let's earn crypto together
          </>
        }
        description="Multiply me 40% commission for every trade on Onebit"
        link={{
          title: 'Xem quy định thời thiệu',
          link: '#',
        }}
        reverse
      />
      <Receive />
      <ReferenceOverview />
      <Benefits />
      <Portfolio />
    </div>
  );
};

export default Reference;
