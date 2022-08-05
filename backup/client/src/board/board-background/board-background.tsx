import React from 'react';
import { ParticlesBackground } from './particles-background';
import { ParticlesOptions } from './particles-options';

export const BoardBackground: React.FC = ({ children }) => {
  return (
    <>
      <ParticlesBackground id="tsparticles" options={ParticlesOptions} />
      {children}
    </>
  );
};
