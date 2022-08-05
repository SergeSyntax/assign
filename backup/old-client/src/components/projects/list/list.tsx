import React, { Fragment } from 'react';
import { ItemProject } from '../item';
import { SkeletonProject } from '../skeleton';
import { useProjects } from '../use-projects';
import { ContainerProjectList } from './container';
import { WrapperListProject } from './wrapper';

interface Props {}

export const ListProject: React.FC<Props> = () => {
  const { data, loading, error } = useProjects();
  if (error) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <ContainerProjectList>
      <WrapperListProject>
        {loading ? (
          <SkeletonProject />
        ) : (
          <Fragment>
            {data?.projects?.map(project => (
              <ItemProject key={project?.id} project={project!} />
            ))}
          </Fragment>
        )}
      </WrapperListProject>
    </ContainerProjectList>
  );
};
