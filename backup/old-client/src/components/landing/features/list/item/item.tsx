import { ParagraphItemListFeature } from './paragraph.style';
import React from 'react';
import { IconType } from 'react-icons/lib';
import { WrapperItemListFeature } from './wrapper.style';
import { TitleItemListFeature } from './title.style';
import { IconItemListFeatureFeature } from './icon.style';

interface Props {
  title: string;
  content: string;
  icon: IconType;
}

export const ItemListFeature: React.FC<Props> = ({ icon, title, content }) => {
  return (
    <WrapperItemListFeature>
      <IconItemListFeatureFeature component={icon} />
      <TitleItemListFeature>{title}</TitleItemListFeature>
      <ParagraphItemListFeature>{content}</ParagraphItemListFeature>
    </WrapperItemListFeature>
  );
};
