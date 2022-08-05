import { ApolloCache, DefaultContext, MutationUpdaterFunction, useMutation } from '@apollo/client';
import { UpdateSectionData } from '../../../../__generated__/globalTypes';
import { UPDATE_SECTION } from './update-section.gql';
import { UpdateSection, UpdateSectionVariables } from './__generated__/UpdateSection';

export const useUpdateSection = () => {
  const [updateSection] = useMutation<UpdateSection, UpdateSectionVariables>(UPDATE_SECTION);

  return { updateSection };
};
