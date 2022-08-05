import React from 'react';
import { SEO } from '../common/seo';
import { BoardBackground } from './board-background';
import { BoardContent } from './board-content.styled';
import { BoardHeader } from './board-header';
import { BoardSections } from './board-sections';
import { BoardWrapper } from './board-wrapper.styled';

interface BoardProps {
  projectId: string;
}

export const Board: React.FC<BoardProps> = (props) => {
  return (
    <BoardBackground>
      <SEO
        title="Board"
        description="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog."
      />
      <BoardWrapper>
        <BoardHeader {...props} />
        <BoardContent>
          <BoardSections {...props} />
        </BoardContent>
      </BoardWrapper>
    </BoardBackground>
  );
};
