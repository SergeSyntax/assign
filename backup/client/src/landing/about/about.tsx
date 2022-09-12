import React from 'react';
import { AboutContainer } from './about-container.styled';
import { AboutImage } from './about-image.styled';
import { AboutWrapper } from './about-wrapper.styled';
import { RubricItem } from './rubric-item';
import { RubricsWrapper } from './rubrics-wrapper.styled';
import { RUBRICS } from './rubrics.const';

export const About: React.FC = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
        <AboutImage alt="about-paragraph" src="/img/about-image.svg" />
        <RubricsWrapper>
          {RUBRICS.map((rubric) => (
            <RubricItem key={rubric.title} {...rubric} />
          ))}
        </RubricsWrapper>
      </AboutContainer>
    </AboutWrapper>
  );
};
