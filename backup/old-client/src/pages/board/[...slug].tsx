import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { LayoutBoard } from 'src/components/board/layout';
import { WrapperBoard } from 'src/components/board/wrapper';
import { HeaderBoard } from 'src/components/board/header/header';
import { ListSection } from 'src/components/sections';
import { ContentBoard } from 'src/components/board/content.style';
import { SEO } from 'src/components/common/seo';
import { DialogTask } from 'src/components/tasks/dialog';

interface Props {
  projectId: string;
  taskId: string;
}

const Board: NextPage<Props> = ({ projectId, taskId }) => {
  return (
    <LayoutBoard>
      <SEO
        title="Board"
        description="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog."
      />
      <WrapperBoard>
        <HeaderBoard projectId={projectId} />
        <ContentBoard>
          <ListSection projectId={projectId} />
        </ContentBoard>
      </WrapperBoard>
      {taskId && <DialogTask taskId={taskId} projectId={projectId} />}
    </LayoutBoard>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const [projectId, taskId = ''] = query.slug as string[];

  return { props: { projectId, taskId } };
};
export default Board;
