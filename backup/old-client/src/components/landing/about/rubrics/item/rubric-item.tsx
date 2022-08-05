import React from 'react';
import { WrapperRubricItem } from './wrapper.style';
import { ImageRubricItem } from './image.style';
import { TitleRubricItem } from './title.style';
import { ParagraphRubricItem } from './paragraph.style';

interface Props {
  illustration: string;
  title: string;
  paragraph: string;
  alt: string;
}

export const RubricItem: React.FC<Props> = ({ illustration, title, paragraph, alt }) => {
  return (
    <WrapperRubricItem>
      <ImageRubricItem src={illustration} alt={alt} />
      <TitleRubricItem>{title}</TitleRubricItem>
      <ParagraphRubricItem>{paragraph}</ParagraphRubricItem>
    </WrapperRubricItem>
  );
};
