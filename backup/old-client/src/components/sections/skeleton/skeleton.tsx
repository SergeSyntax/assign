import { Skeleton, styled } from '@mui/material';
import _ from 'lodash';
import React, { Fragment, useState } from 'react';
import { ShapeSkeletonSection } from './shape';

const HeaderSkeletonSection = styled('span')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SkeletonSection: React.FC = () => {
  const [height] = useState(process.browser ? window.innerHeight : 0);

  return (
    <Fragment>
      {_.times(5, i => (
        <ShapeSkeletonSection key={i}>
          <HeaderSkeletonSection>
            <Skeleton variant="text" height={5} width={140} />
            <Skeleton variant="circular" height={20} width={20} />
          </HeaderSkeletonSection>

          {_.times(8, j => (
            <Skeleton style={{ margin: '1rem 0' }} key={j} variant="rectangular" height={90} />
          ))}
        </ShapeSkeletonSection>
      ))}
    </Fragment>
  );
};
