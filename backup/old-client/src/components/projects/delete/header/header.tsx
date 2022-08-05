import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { GoX } from 'react-icons/go';

const WrapperHeaderDeleteProject = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f6f8fa;
  padding-right: 1rem;
`;
const TitleHeaderDeleteProject = styled('div')`
  font-size: 1.6rem;
  font-weight: bold;
  padding: ${({ theme }) => theme.spacing(2)};
`;

const CloseButtonHeaderDeleteProject = styled(IconButton)`
  padding: 0.7rem;
  border-radius: 0.6rem;
`;

interface Props {
  handleClose: () => void;
}

export const HeaderDeleteProject: React.FC<Props> = ({ handleClose }) => {
  return (
    <WrapperHeaderDeleteProject>
      <TitleHeaderDeleteProject> Are you absolutely sure?</TitleHeaderDeleteProject>
      <CloseButtonHeaderDeleteProject size="small" onClick={handleClose}>
        <GoX />
      </CloseButtonHeaderDeleteProject>
    </WrapperHeaderDeleteProject>
  );
};
