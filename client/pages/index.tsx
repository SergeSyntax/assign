import type { NextPage } from 'next';
import { About, Features, LandingFooter, LandingHeader, ScrollUpButton, SEO } from '../src';

const Home: NextPage = () => {
  return (
    <>
      <SEO description="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog." />
      <LandingHeader />
      <About />
      <Features />
      <LandingFooter />
      <ScrollUpButton />
    </>
  );
};

export default Home;
