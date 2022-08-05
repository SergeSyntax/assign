import React from 'react';
import { FilterProject } from '../filter';
import { ListProject } from '../list';
import { WrapperPanelProject } from './wrapper';

interface Props {}

export const PanelProject: React.FC<Props> = () => {
  return (
    <WrapperPanelProject>
      <FilterProject />
      <ListProject />
    </WrapperPanelProject>
  );
};
