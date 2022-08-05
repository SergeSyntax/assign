import React from 'react';
import { SectionRes } from '../section-res.interface';
import { Sections_sections } from '../__generated__/Sections';
import { ContainerItemSection } from './container';
import { ContentItemSection } from './content';
import { HeaderItemSection } from './header';
import { WrapperItemSection } from './wrapper';

interface Props {
  section: Sections_sections;
}

export const ItemSection: React.FC<Props> = ({ section }) => {
  return (
    <ContainerItemSection>
      <WrapperItemSection>
        <HeaderItemSection section={section} />
        <ContentItemSection section={section} />
      </WrapperItemSection>
    </ContainerItemSection>
  );
};
