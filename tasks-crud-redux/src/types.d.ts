export interface TaskForm {
  title: string;
  description: string;
}
export interface Task extends TaskForm {
  id: string;
  completed: boolean;
}

export type idForm = Pick<Task, "id">;
