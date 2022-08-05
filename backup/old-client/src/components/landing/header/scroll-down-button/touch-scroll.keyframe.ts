import { keyframes } from '@emotion/react';

export const TouchScrollKeyframe = keyframes`    
0% {
    transform: translate(-50%, 0);
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  80% {
    transform: translate(-50%, 20px);
  }

  100% {
    opacity: 0;
  }
  `;
