import React from 'react';
import { ParticlesBackground } from './particles-background';
import { ParticlesOptions } from './particles-options';

const Background: React.FC = () => {
  return <ParticlesBackground id="tsparticles" options={ParticlesOptions} />;
};

export default Background;
