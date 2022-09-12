import React from 'react';
import { FeaturesContainer } from './features-container.styled';
import { FeaturesWrapper } from './features-wrapper.styled';
import { FEATURES } from './features.const';
import { VideoBackground } from './video-background.styled';
import { FeatureItem } from './feature-item';

export const Features: React.FC = () => {
  return (
    <FeaturesWrapper>
      <VideoBackground src="/video/features-video-background.mp4" autoPlay loop muted />
      <FeaturesContainer maxWidth="lg">
        {FEATURES.map((feature) => (
          <FeatureItem key={feature.title} {...feature} />
        ))}
      </FeaturesContainer>
    </FeaturesWrapper>
  );
};
