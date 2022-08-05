import _ from 'lodash';
import React, { Fragment, useState } from 'react';
import { PROJECT_ITEM_HEIGHT, PROJECT_ITEM_MARGIN_BOTTOM } from '../item/const';
import { ShapeSkeletonProject } from './shape';

const HEIGHT_PER_ITEM: number =
  parseFloat(
    PROJECT_ITEM_HEIGHT.replace('rem', '') + PROJECT_ITEM_MARGIN_BOTTOM.replace('rem', '')
  ) * 15;

export const SkeletonProject: React.FC = () => {
  const [height] = useState(process.browser ? window.innerHeight : 0);
  const skeletonNum = Math.floor(height / HEIGHT_PER_ITEM) + 1;

  return (
    <Fragment>
      {_.times(5, i => (
        <ShapeSkeletonProject key={i} variant="rectangular" animation="wave" />
      ))}
    </Fragment>
  );
};
