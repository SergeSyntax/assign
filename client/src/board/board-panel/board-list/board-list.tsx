import React from 'react';
import { ProjectItem } from '../project-item';
import { useFetchProjects } from './board-list.hook';
import { ProjectsListContainer, ProjectsListWrapper, RefetchingProgress } from './board-list.styled';
import { InfiniteScrollLoader } from '../Infinite-scroll';
import { ProjectItemSkeleton, PROJECT_ITEM_TOTAL_HEIGHT } from '../project-item';
import { NotFoundIllustration } from '../not-found-illustration';
import { useWindowSize } from 'src/common/window-size.hook';

interface ProjectsListProps {}

export const BoardList: React.FC<ProjectsListProps> = () => {
  const { projects, loading, error, handleFetchMore, isFetchingMore, isRefetching, hasMore, searchValue } =
    useFetchProjects(0, 20);
  const INITIAL_HEIGHT = 1;
  const { height } = useWindowSize();
  const skeletonNum = Math.ceil(height / PROJECT_ITEM_TOTAL_HEIGHT) + INITIAL_HEIGHT;

  // TODO: add error svg and on error and when no projects were found
  if (error) return <span>Error: {error.message}</span>;

  if (!loading && !projects?.length) return <NotFoundIllustration searchValue={searchValue} />;

  // if (!projects?.length) return <>create new value</>;

  return (
    <ProjectsListContainer>
      <ProjectsListWrapper>
        {isRefetching && <RefetchingProgress />}
        {loading ? (
          <>
            {Array.from({ length: skeletonNum }, (_, key) => (
              <ProjectItemSkeleton key={key} />
            ))}
          </>
        ) : (
          <>
            {projects?.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}

            <InfiniteScrollLoader hasMore={hasMore} handleFetchMore={handleFetchMore} isFetchingMore={isFetchingMore} />
          </>
        )}
      </ProjectsListWrapper>
    </ProjectsListContainer>
  );
};
