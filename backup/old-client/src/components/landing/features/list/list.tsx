import { ItemListFeature } from './item';
import { WrapperListFeature } from './wrapper.style';
import { LIST_FEATURE } from './list.constant';

export const ListFeature: React.FC = () => (
  <WrapperListFeature maxWidth="lg">
    {LIST_FEATURE.map(feature => (
      <ItemListFeature key={feature.title} {...feature} />
    ))}
  </WrapperListFeature>
);
