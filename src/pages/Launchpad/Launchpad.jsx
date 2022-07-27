import React, { useEffect } from 'react';

import Header from '@/containers/Header';
import LaunchpadCarousel from '@/containers/LaunchpadCarousel';
import Contact from '@/containers/Contact';
import Stacking from '@/containers/Stacking';
import Projects from '@/containers/Projects';
import Collaborators from '@/containers/Collaborators';
import Portfolio from '@/containers/Portfolio';
import List from '@/containers/List';
import { scrollToTop } from '@/utils/functions';

const Launchpad = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="Launchpad">
      <Header title="Launchpad" />
      <LaunchpadCarousel />
      <Stacking />
      <List />
      <Projects />
      <Collaborators />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Launchpad;
