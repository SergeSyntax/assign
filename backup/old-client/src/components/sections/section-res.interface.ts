import { TaskRes } from '../tasks/task-res.interface';

export interface SectionRes {
  title: string;
  id: string;
  createdAt: string;
  updateAt: string;
  projectId: string;
  tasks: TaskRes[];
}
