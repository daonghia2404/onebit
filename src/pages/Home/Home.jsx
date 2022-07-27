import React, { useEffect } from 'react';

import Header from '@/containers/Header';
import Introduction from '@/containers/Introduction';
import News from '@/containers/News';
import Features from '@/containers/Features';
import AboutUs from '@/containers/AboutUs';
import Tokenomics from '@/containers/Tokenomics';
import Teams from '@/containers/Teams';
import Partner from '@/containers/Partner';
import Footer from '@/containers/Footer';
import { scrollToTop } from '@/utils/functions';

const Home = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="Home">
      <Header title="Home" />
      <Introduction />
      <News />
      <Features />
      <AboutUs />
      <Tokenomics />
      <Teams />
      <Partner />
      <Footer />
    </div>
  );
};

export default Home;
