import { RubricItem } from './item';
import { RUBRICS } from './rubric-list.constant';
import { WrapperRubrics } from './wrapper.style';

export const Rubrics: React.FC = () => (
  <WrapperRubrics>
    {RUBRICS.map(rubric => (
      <RubricItem key={rubric.title} {...rubric} />
    ))}
  </WrapperRubrics>
);
