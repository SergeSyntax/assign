import { CardActionArea } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { TaskFields } from '../__generated__/TaskFields';
import { TaskItemContent } from './task-item-content.styled';
import { TaskItemLink } from './task-item-link.styled';
import { TaskItemWrapper } from './task-item-wrapper.styled';

interface TaskItemProps {
  task: TaskFields;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const router = useRouter();
  const [projectId] = router.query.slug as string[];
  return (
    <TaskItemLink href={`/board/${projectId}/${task.id}`}>
      <TaskItemWrapper>
        <CardActionArea>
          <TaskItemContent>{task.title}</TaskItemContent>
        </CardActionArea>
      </TaskItemWrapper>
    </TaskItemLink>
  );
};
