import { CardActionArea, CardHeader } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import { MenuItemProject } from '../menu';
import { Projects_projects } from '../__generated__/Projects';
import { WrapperItemProject } from './wrapper';

interface Props {
  project: Projects_projects;
}

export const ItemProject: React.FC<Props> = ({ project }) => {
  return (
    <WrapperItemProject>
      <Link passHref href={`/board/${project.id}`}>
        <CardActionArea>
          <CardHeader
            title={project.title}
            subheader={project.accessibility ? 'public' : 'private'}
          />
        </CardActionArea>
      </Link>

      <MenuItemProject project={project} />
    </WrapperItemProject>
  );
};
