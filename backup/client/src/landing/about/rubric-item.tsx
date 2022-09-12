import React from 'react';
import { RubricItemImage } from './rubric-item-image.styled';
import { RubricItemParagraph } from './rubric-item-paragraph.styled';
import { RubricItemTitle } from './rubric-item-title.styled';
import { RubricItemWrapper } from './rubric-item-wrapper.styled';

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
