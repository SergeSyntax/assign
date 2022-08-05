import React from 'react';
import { DownButton } from './down-button.style';

export const ScrollDownButton: React.FC = () => (
  <DownButton
    onClick={e => {
      e.currentTarget.blur();
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }}
  />
);
