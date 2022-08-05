import { NextPage } from 'next';

import React, { Fragment } from 'react';

import { SEO } from '../components/common/seo';
import { HeaderLanding } from 'src/components/landing/header';
import { About } from 'src/components/landing/about';
import { Features } from 'src/components/landing/features';
import { FooterLanding } from 'src/components/landing/footer';
import { ScrollUpButton } from 'src/components/landing/scroll-up-button';

const Home: NextPage = () => (
  <Fragment>
    <SEO description="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog." />
    <HeaderLanding />
    <About />
    <Features />
    <FooterLanding />
    <ScrollUpButton />
  </Fragment>
);

export default Home;
