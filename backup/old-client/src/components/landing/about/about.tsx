import React from 'react';
import { ContainerAbout } from './container.style';
import { WrapperAbout } from './wrapper.style';
import { ImageAbout } from './image.style';
import { Rubrics } from './rubrics';

export const About: React.FC = () => {
  return (
    <WrapperAbout draggable={false}>
      <ContainerAbout>
        <ImageAbout alt="about-paragraph" src="/img/about-image.svg" />
        <Rubrics />
      </ContainerAbout>
    </WrapperAbout>
  );
};
