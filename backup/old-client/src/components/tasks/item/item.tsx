import { Card, CardActionArea, CardContent, Link, styled } from '@mui/material';
import React from 'react';
import { TaskRes } from '../task-res.interface';
import { useRouter } from 'next/router';

interface Props {
  task: TaskRes;
}

const WrapperItemTask = styled(Card)`
  margin-bottom: 1rem;
  flex-shrink: 0;
`;

const ContentItemTask = styled(CardContent)`
  && {
    word-break: break-all;
    font-size: 1.3rem;
  }
`;

const LinkItemTask = styled(Link)`
  && {
    text-decoration: none;
  }
`;

export const ItemTask: React.FC<Props> = ({ task }) => {
  const router = useRouter();
  const [projectId] = router.query.slug as string[];

  return (
    <LinkItemTask href={`/board/${projectId}/${task.id}`}>
      <WrapperItemTask>
        <CardActionArea>
          <ContentItemTask>{task.title}</ContentItemTask>
        </CardActionArea>
      </WrapperItemTask>
    </LinkItemTask>
  );
};
