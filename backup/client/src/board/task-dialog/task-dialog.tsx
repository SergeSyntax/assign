import { Dialog } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useFetchTask } from './fetch-task.hook';
import { TaskPanel } from './task-panel';
import { FetchTask_fetchTask } from './__generated__/FetchTask';

interface TaskDialogProps {
  projectId: string;
  taskId: string;
}

export const TaskDialog: React.FC<TaskDialogProps> = ({ projectId, taskId }) => {
  const router = useRouter();
  const handleClose = () => router.push(`/board/${projectId}`);
  const { task, loading } = useFetchTask(taskId);

  return (
    <Dialog open={true} fullWidth maxWidth="md" onClose={handleClose}>
      {loading || !task ? <div>loading</div> : <TaskPanel task={task} handleClose={handleClose} />}
    </Dialog>
  );
};
