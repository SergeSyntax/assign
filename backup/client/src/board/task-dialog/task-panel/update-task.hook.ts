import { ApolloCache, DefaultContext, MutationUpdaterFunction, useMutation } from '@apollo/client';
import { UPDATE_TASK } from './update-task.gql';
import { UpdateTask, UpdateTaskVariables } from './__generated__/UpdateTask';

export type UpdateTaskCacheHandler = MutationUpdaterFunction<
  UpdateTask,
  UpdateTaskVariables,
  DefaultContext,
  ApolloCache<any>
>;

export const useUpdateTask = () => {
  const [updateTask, { loading }] = useMutation<UpdateTask, UpdateTaskVariables>(UPDATE_TASK);

  return { updateTask, loading };
};
