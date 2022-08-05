import { useMutation } from '@apollo/client';
import { DELETE_SECTION } from './delete-section.gql';
import { DeleteSection, DeleteSectionVariables } from './__generated__/DeleteSection';

export const useDeleteSection = (id: string) => {
  const [deleteSection] = useMutation<DeleteSection, DeleteSectionVariables>(DELETE_SECTION, {
    variables: { id },
    async update(cache, { data }) {
      if (data) {
        const { id, __typename } = data.deleteSection.section;
        cache.evict({ id: cache.identify({ id, __typename }) });
        cache.gc();
      }
    },
  });

  return { deleteSection };
};
