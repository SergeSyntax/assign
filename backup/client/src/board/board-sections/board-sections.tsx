import React from 'react';
import { BoardSectionsSkeleton } from './board-sections-skeleton';
import { BoardSectionsWrapper } from './board-sections-wrapper.styled';
import { useFetchSections } from './fetch-sections.hook';
import { SectionCreate } from './section-create';
import { Section } from './section';

interface BoardSectionsProps {
  projectId: string;
}

export const BoardSections: React.FC<BoardSectionsProps> = ({ projectId }) => {
  const { sections, loading } = useFetchSections(projectId);

  return (
    <BoardSectionsWrapper>
      {loading ? (
        <BoardSectionsSkeleton />
      ) : (
        <>
          {sections?.map((section) => (
            <Section key={section.id} section={section} />
          ))}
          <SectionCreate projectId={projectId} />
        </>
      )}
    </BoardSectionsWrapper>
  );
};
