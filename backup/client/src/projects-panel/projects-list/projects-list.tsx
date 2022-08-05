import React from 'react';
import { ProjectItem } from '../project-item';
import { useFetchProjects } from './fetch-projects.hook';
import { ProjectListSkeleton } from './project-list-skeleton';
import { ProjectsListContainer } from './projects-list-container.styled';
import { ProjectsListWrapper } from './projects-list-wrapper.styled';
import { InfiniteScrollLoader } from '../Infinite-scroll';
import { RefetchingProgress } from './refetching-progress.styled';
import { NotFoundIllustration } from '../not-found-illustration';

interface ProjectsListProps {}

export const ProjectsList: React.FC<ProjectsListProps> = () => {
  const {
    projects,
    loading,
    error,
    handleFetchMore,
    isFetchingMore,
    isRefetching,
    hasMore,
    searchValue,
  } = useFetchProjects(0, 20);

  // TODO: add error svg and on error and when no projects were found
  if (error) return <span>Error: {error.message}</span>;

  if (!loading && !projects?.length) return <NotFoundIllustration searchValue={searchValue} />;

  // if (!projects?.length) return <>create new value</>;

  return (
    <ProjectsListContainer>
      <ProjectsListWrapper>
        {isRefetching && <RefetchingProgress />}
        {loading ? (
          <ProjectListSkeleton />
        ) : (
          <>
            {projects?.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}

            <InfiniteScrollLoader
              hasMore={hasMore}
              handleFetchMore={handleFetchMore}
              isFetchingMore={isFetchingMore}
            />
          </>
        )}
      </ProjectsListWrapper>
    </ProjectsListContainer>
  );
};
