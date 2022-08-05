import React from 'react';
import { TaskList } from '../task-list';
import { FetchSections_fetchSections_sections } from '../__generated__/FetchSections';
import { SectionWrapper } from './board-section-wrapper.styled';
import { SectionContainer } from './section-container.styled';
import { SectionContent } from './section-content.styled';
import { SectionHeader } from './section-header';
import { TaskCreate } from './task-create/task-create';

interface BoardSectionProps {
  section: FetchSections_fetchSections_sections;
}

export const Section: React.FC<BoardSectionProps> = (props) => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <SectionHeader {...props} />
        <SectionContent>
          <TaskList tasks={props?.section?.tasks ?? []} />
          <TaskCreate sectionId={props.section.id} />
        </SectionContent>
      </SectionWrapper>
    </SectionContainer>
  );
};
