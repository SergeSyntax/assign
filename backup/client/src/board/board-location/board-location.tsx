import React, { createElement } from 'react';
import Link from 'next/link';
import { useDropdown } from '../../common/dropdown.hook';
import { SEO } from '../../common/seo';
import { BoardBreadcrumbs } from './board-breadcrumbs.styled';
import { useFetchProject } from './fetch-project.hook';
import { BoardChip } from './board-chip.styled';
import { GoHome } from 'react-icons/go';
import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai';
import { BoardLocationProgress } from './board-location-progress.styled';
import { MdExpandMore } from 'react-icons/md';
import { BoardLocationMenu } from './board-location-menu';

interface BoardLocationProps {
  projectId: string;
}

export const BoardLocation: React.FC<BoardLocationProps> = ({ projectId }) => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown();
  const { project, loading } = useFetchProject(projectId);

  return (
    <>
      {loading && (
        <SEO
          title={project?.title}
          description="Assign is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog."
        />
      )}

      <BoardBreadcrumbs>
        <Link passHref href="/dashboard">
          <BoardChip label="Dashboard" avatar={createElement(GoHome)} />
        </Link>

        <Link passHref href="/dashboard/projects">
          <BoardChip label="Projects" avatar={createElement(AiOutlineFolder)} />
        </Link>

        {loading ? (
          <BoardLocationProgress />
        ) : (
          <BoardChip
            onClick={openDropdown as any}
            label={project?.title}
            avatar={createElement(AiOutlineFolderOpen)}
            deleteIcon={createElement(MdExpandMore)}
            onDelete={openDropdown}
          />
        )}
      </BoardBreadcrumbs>
      {!loading && (
        <BoardLocationMenu
          dropdown={dropdown}
          closeDropdown={closeDropdown}
          projectId={projectId}
        />
      )}
    </>
  );
};
