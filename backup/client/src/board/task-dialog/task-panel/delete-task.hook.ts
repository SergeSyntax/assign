import { useMutation } from '@apollo/client';
import { DELETE_TASK } from './delete-task.gql';
import { DeleteTask, DeleteTaskVariables } from './__generated__/DeleteTask';

interface UserDeleteTaskArguments {
  id: string;
  onCompleted: (data: DeleteTask) => void;
}

export const useDeleteTask = ({ id, onCompleted }: UserDeleteTaskArguments) => {
  const [deleteTask] = useMutation<DeleteTask, DeleteTaskVariables>(DELETE_TASK, {
    variables: { id },
    async update(cache, { data }) {
      if (data) {
        const { id, __typename } = data.deleteTask.task;
        cache.evict({ id: cache.identify({ id, __typename }) });
        cache.gc();
      }
    },
    onCompleted,
  });

  return { deleteTask };
};
