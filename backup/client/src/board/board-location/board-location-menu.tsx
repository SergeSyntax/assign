import { Fade } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useFetchProjects } from '../../projects-panel/projects-list/fetch-projects.hook';
import { BoardLocationMenuItem } from './board-location-menu-item.styled';
import { BoardLocationMenuProgress } from './board-location-menu-progress.styled';
import { BoardLocationMenuSearch } from './board-location-menu-search.styled';
import { BoardLocationMenuWrapper } from './board-location-menu-wrapper.styled';

interface BoardLocationMenuProps {
  projectId: string;
  dropdown?: Element;
  closeDropdown: () => void;
}

export const BoardLocationMenu: React.FC<BoardLocationMenuProps> = ({
  dropdown,
  closeDropdown,
  projectId,
}) => {
  const { projects, loading } = useFetchProjects();

  return (
    <BoardLocationMenuWrapper
      id="simple-menu"
      anchorEl={dropdown}
      keepMounted
      open={Boolean(dropdown)}
      onClose={closeDropdown}
      TransitionComponent={Fade}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <BoardLocationMenuSearch />

      {loading ? (
        <BoardLocationMenuProgress />
      ) : (
        projects?.map(({ id, title }) => (
          <Link href={`/board/${id}`} key={id} passHref>
            <BoardLocationMenuItem onClick={closeDropdown} disabled={id === projectId}>
              {title}
            </BoardLocationMenuItem>
          </Link>
        ))
      )}
    </BoardLocationMenuWrapper>
  );
};
