import { CardActionArea, CardHeader } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { ProjectItemMenu } from '../project-menu';
import { ProjectItemProps } from './project-item-props.interface';
import { ProjectItemWrapper } from './project-item-wrapper.styled';

export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <ProjectItemWrapper>
      <Link passHref href={`/board/${project.id}`}>
        <CardActionArea>
          <CardHeader title={project.title} subheader={project.accessibility.toLocaleLowerCase()} />
        </CardActionArea>
      </Link>
      <ProjectItemMenu project={project} />
    </ProjectItemWrapper>
  );
};
