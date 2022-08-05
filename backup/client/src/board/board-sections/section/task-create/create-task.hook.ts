import { useMutation } from '@apollo/client';
import { TASK_FIELDS } from '../../../../common/fragments/task-fields.gql';
import { CREATE_TASK } from './create-task.gql';
import { CreateTask, CreateTaskVariables } from './__generated__/CreateTask';

export const useCreateTask = () => {
  const [createTask, { loading }] = useMutation<CreateTask, CreateTaskVariables>(CREATE_TASK, {
    update(cache, { data }) {
      const task = data?.createTask?.task;

      if (task)
        cache.modify({
          id: cache.identify({ id: task?.sectionId, __typename: 'Section' }),
          fields: {
            tasks(existingTasks = []) {
              const newTaskRef = cache.writeFragment({
                fragment: TASK_FIELDS,
                data: task,
              });

              return [...existingTasks, newTaskRef];
            },
          },
        });
    },
  });

  return { createTask, loading };
};
