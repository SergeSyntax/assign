import React from 'react';
import { CreateTask, ListTask } from 'src/components/tasks';
import { SectionRes } from '../../section-res.interface';
import { Sections_sections } from '../../__generated__/Sections';
import { WrapperContentItemSection } from './wrapper';

interface Props {
  section: Sections_sections;
}

export const ContentItemSection: React.FC<Props> = ({ section }) => {
  return (
    <WrapperContentItemSection>
      <ListTask tasks={section.tasks} />
      <CreateTask sectionId={section.id} />
    </WrapperContentItemSection>
  );
};
