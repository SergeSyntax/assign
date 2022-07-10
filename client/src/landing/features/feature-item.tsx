import React from 'react';
import { IconType } from 'react-icons';
import {
  FeatureItemIcon,
  FeatureItemParagraph,
  FeatureItemTitle,
  FeatureItemWrapper,
} from './feature-item.styled';

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
