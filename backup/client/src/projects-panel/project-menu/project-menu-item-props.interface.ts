import { styled } from '@mui/material';
import { ProjectItemProps } from '../project-item/project-item-props.interface';

export interface ProjectMenuItemProps extends ProjectItemProps {
  closeDropdown: () => void;
}
