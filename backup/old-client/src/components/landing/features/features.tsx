import React from 'react';

import { VideoBackgroundFeatures } from './video-background.style';
import { WrapperFeatures } from './wrapper.style';
import { ListFeature } from './list';

export const Features: React.FC = () => {
  return (
    <WrapperFeatures>
      <VideoBackgroundFeatures src="/video/features-video-background.mp4" autoPlay loop muted />
      <ListFeature />
    </WrapperFeatures>
  );
};
