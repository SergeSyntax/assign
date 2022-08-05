import React, { Fragment } from 'react';
import Background from './background';

export const LayoutBoard: React.FC = props => {
  return (
    <Fragment>
      <Background />
      {props.children}
    </Fragment>
  );
};
