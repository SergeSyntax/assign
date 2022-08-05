export interface TaskRes {
  id: string;
  title: string;
  order: number;
  dueDate?: string;
  description?: string;
  sectionId: string;
  createdAt: string;
  updatedAt: string;
}
