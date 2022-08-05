import { Dialog } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { PanelTask } from '../panel';
import { useTask } from '../use-task';

interface Props {
  taskId: string;
  projectId: string;
}

export const DialogTask: React.FC<Props> = ({ taskId, projectId }) => {
  const router = useRouter();
  const handleClose = () => router.push(`/board/${projectId}`);
  const { data, loading } = useTask(taskId as string);

  return (
    <Dialog fullWidth maxWidth="md" onClose={handleClose} open={!!taskId}>
      {loading ? <div>loading</div> : <PanelTask task={data} handleClose={handleClose} />}
    </Dialog>
  );
};
