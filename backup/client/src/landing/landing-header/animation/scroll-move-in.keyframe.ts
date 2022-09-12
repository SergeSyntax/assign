import { keyframes } from '@emotion/react';

export const scrollMoveInKeyframe = keyframes`
  0% {
    opacity: 0;

    transform: translate(-50%, 3rem);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, 0rem);
  }
`;
