import { useMutation } from '@apollo/client';
import { CREATE_SECTION } from './create-section.gql';
import { CreateSection, CreateSectionVariables } from './__generated__/CreateSection';

export const useCreateSection = () => {
  const [createSection, { loading }] = useMutation<CreateSection, CreateSectionVariables>(
    CREATE_SECTION,
    { refetchQueries: ['FetchSections'] }
  );
  return { createSection, loading };
};
