import {
  Breadcrumbs,
  Chip,
  CircularProgress,
  emphasize,
  ListItemIcon,
  Menu,
  MenuItem,
  styled
} from '@mui/material';
import { grey } from '@mui/material/colors';
import Link from 'next/link';
import React, { createElement, Fragment, useState } from 'react';
import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai';
import { GoHome } from 'react-icons/go';
import { MdExpandMore } from 'react-icons/md';
import { useDropdown } from 'src/components/common/dropdown.hook';
import { SEO } from 'src/components/common/seo';
import { useProject } from 'src/components/projects/use-project';
import { MenuLocation } from './menu';

const BreadcrumbsBoard = styled(Breadcrumbs)`
  color: #fff;
`;

const ChipBoard = styled(Chip)`
  && {
    background: rgba(0%, 0%, 50%, 0.1);
    height: 2rem;
    font-weight: bold;
    color: inherit;
    font-size: 1.3rem;
    padding-left: 0.3rem;
    margin-bottom: 0.4rem;
    :hover,
    :focus {
      background: rgba(0%, 0%, 50%, 0.2);
    }

    .MuiChip-avatar,
    .MuiChip-deleteIcon {
      color: inherit;
      display: inline;
      width: 1.4rem;
      height: 1.4rem;
    }

    .MuiChip-deleteIcon {
      width: 1.8rem;
      height: 1.8rem;
      &:hover {
        color: inherit;
      }
    }

    &:active {
      box-shadow: ${({ theme }) => theme.shadows[1]};
      background: ${emphasize('rgba(0%,0%,50%,.2)', 0.12)};
    }
  }
`;

const ProgressBoard = styled(CircularProgress)`
  margin-left: 1rem;
`;

interface Props {
  projectId: string;
}

export const LocationBoard: React.FC<Props> = ({ projectId }) => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown(null);
  const { data, loading } = useProject(projectId);

  return (
    <Fragment>
      {loading && (
        <SEO
          title={data?.project?.title}
          description="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog."
        />
      )}

      <BreadcrumbsBoard>
        <Link passHref href="/dashboard">
          <ChipBoard label="Dashboard" avatar={createElement(GoHome)} />
        </Link>

        <Link passHref href="/dashboard/projects">
          <ChipBoard label="Projects" avatar={createElement(AiOutlineFolder)} />
        </Link>
        {loading ? (
          <ProgressBoard color="inherit" size={15} />
        ) : (
          <ChipBoard
            onClick={openDropdown as any}
            label={data?.project.title}
            avatar={createElement(AiOutlineFolderOpen)}
            deleteIcon={createElement(MdExpandMore)}
            onDelete={openDropdown}
          />
        )}
      </BreadcrumbsBoard>
      {!loading && (
        <MenuLocation dropdown={dropdown} closeDropdown={closeDropdown} projectId={projectId} />
      )}
    </Fragment>
  );
};
