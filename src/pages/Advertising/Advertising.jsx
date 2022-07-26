import React from 'react';

import Header from '@/containers/Header';
import Contact from '@/containers/Contact';
import IntroductionSection from '@/containers/IntroductionSection';
import ImageSatellite from '@/assets/images/image-satellite.png';
import About from '@/containers/About';
import Packages from '@/containers/Packages';
import Faq from '@/containers/Faq';

const Advertising = () => {
  return (
    <div className="Advertising">
      <Header title="Advertising" />
      <IntroductionSection
        image={ImageSatellite}
        title="We are creative, smart "
        description="Several creative people gather in the same place - that's Collosal. We collaborate to produce the best results, loved by clients and comfortable for users. Here we maintain togetherness even though with different backgrounds, all the people here are already experts in their respective fields."
      />
      <About />
      <Packages />
      <Faq />

      <Contact />
    </div>
  );
};

export default Advertising;
