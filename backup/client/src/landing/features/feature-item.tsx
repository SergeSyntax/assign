import React from 'react';
import { IconType } from 'react-icons';
import { FeatureItemIcon } from './feature-item-icon.styled';
import { FeatureItemParagraph } from './feature-item-paragraph.styled';
import { FeatureItemTitle } from './feature-item-title.styled';
import { FeatureItemWrapper } from './feature-item-wrapper.styled';

export interface FeatureItemProps {
  title: string;
  content: string;
  icon: IconType;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, content }) => {
  return (
    <FeatureItemWrapper>
      <FeatureItemIcon component={icon} />
      <FeatureItemTitle>{title}</FeatureItemTitle>
      <FeatureItemParagraph>{content}</FeatureItemParagraph>
    </FeatureItemWrapper>
  );
};
