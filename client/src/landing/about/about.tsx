import React from 'react';
import { AboutContainer, AboutImage, AboutWrapper, RubricsWrapper } from './about.styled';
import { RubricItem } from './rubric-item';
import { RUBRICS } from './about.const';

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
