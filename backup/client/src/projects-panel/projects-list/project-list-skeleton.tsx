import React from 'react';
import { ProjectItemSkeleton, PROJECT_ITEM_TOTAL_HEIGHT } from '../project-item';
import { useWindowSize } from '../../common/window-size.hook';

export const ProjectListSkeleton: React.FC = () => {
  const INITIAL_HEIGHT = 1;
  const { height } = useWindowSize();
  const skeletonNum = Math.ceil(height / PROJECT_ITEM_TOTAL_HEIGHT) + INITIAL_HEIGHT;

  return (
    <>
      {Array.from({ length: skeletonNum }, (_, key) => (
        <ProjectItemSkeleton key={key} />
      ))}
    </>
  );
};
