import React, { useEffect } from 'react';

import Header from '@/containers/Header';
import IntroductionSection from '@/containers/IntroductionSection';
import Collaborators from '@/containers/Collaborators';
import About from '@/containers/About';
import Benefit from '@/containers/Benefit';
import Blogs from '@/containers/Blogs';
import Teams from '@/containers/Teams';
import Contact from '@/containers/Contact';
import ImageRocket from '@/assets/images/image-rocket.png';
import { scrollToTop } from '@/utils/functions';

const Incubator = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="Incubator">
      <Header title="Incubator" />
      <IntroductionSection
        image={ImageRocket}
        title="stage crypto startups"
        description="With USD 2 million earmarked for investment, our venture arm leads Seed and Series A rounds."
      />
      <Collaborators />
      <About />
      <Benefit />
      <Blogs />
      <Teams />
      <Contact />
    </div>
  );
};

export default Incubator;
