import { Fade, LinearProgress, MenuItem, styled, TextField } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useProjects } from 'src/components/projects/use-projects';
import { WrapperMenuLocation } from './wrapper';

interface Props {
  projectId: string;
  dropdown: Element | null;
  closeDropdown: () => void;
}

const ItemMenuLocation = styled(MenuItem)`
  & {
    font-size: 1.4rem;
    font-weight: bold;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  &:hover {
    background: hsla(206, 100%, 79%, 0.3);
  }
`;

const SearchMenuLocation = styled(TextField)`
  && {
    margin: 1rem 1.6rem;
  }
`;

SearchMenuLocation.defaultProps = { size: 'small', placeholder: 'Find boards by name…' };

const LoadingMenuLocation = styled(LinearProgress)`
  /* background: transparent; */
  height: 0.2rem;
`;

export const MenuLocation: React.FC<Props> = ({ dropdown, closeDropdown, projectId }) => {
  // TODO: modify the userProject according to apollo
  const { data, loading } = useProjects();
  return (
    <WrapperMenuLocation
      id="simple-menu"
      anchorEl={dropdown}
      keepMounted
      open={Boolean(dropdown)}
      onClose={closeDropdown}
      TransitionComponent={Fade}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <SearchMenuLocation />
      {loading && <LoadingMenuLocation />}
      {data?.projects?.map(project => (
        <Link href={`/board/${project.id}`} key={project.id} passHref>
          <ItemMenuLocation onClick={closeDropdown} disabled={project.id === projectId}>
            {project.title}
          </ItemMenuLocation>
        </Link>
      ))}
    </WrapperMenuLocation>
  );
};
