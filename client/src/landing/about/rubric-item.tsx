import React from 'react';
import {
  RubricItemImage,
  RubricItemParagraph,
  RubricItemTitle,
  RubricItemWrapper,
} from './rubric-item.styled';

export interface RubricItemProps {
  illustration: string;
  title: string;
  paragraph: string;
  alt: string;
}

export const RubricItem: React.FC<RubricItemProps> = ({ illustration, title, paragraph, alt }) => {
  return (
    <RubricItemWrapper>
      <RubricItemImage src={illustration} alt={alt} />
      <RubricItemTitle>{title}</RubricItemTitle>
      <RubricItemParagraph>{paragraph}</RubricItemParagraph>
    </RubricItemWrapper>
  );
};
