import type { NextPage } from 'next';
import { Landing } from '../src/landing';
import { SEO } from '../src/common/seo';

const Home: NextPage = () => {
  return (
    <>
      <SEO description="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog." />
      <Landing />
    </>
  );
};

export default Home;
