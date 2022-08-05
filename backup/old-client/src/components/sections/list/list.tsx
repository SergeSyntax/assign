import React, { Fragment } from 'react';
import { CreateSection } from '../create';
import { ItemSection } from '../item';
import { SkeletonSection } from '../skeleton';
import { useSections } from '../use-sections';
import { WrapperListSection } from './wrapper.style';

interface Props {
  projectId: string;
}

export const ListSection: React.FC<Props> = ({ projectId }) => {
  const { data, loading } = useSections(projectId);
  console.log('data');

  return (
    <WrapperListSection>
      {loading ? (
        <SkeletonSection />
      ) : (
        <Fragment>
          {/* List */}
          {data!.sections?.map((section, index) => (
            <ItemSection key={index} section={section} />
          ))}
          {/* Create new */}
          <CreateSection projectId={projectId} />
        </Fragment>
      )}
    </WrapperListSection>
  );
};
