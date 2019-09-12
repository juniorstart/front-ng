import { TaskInterface } from './taskInterface';

export interface TodoListInterface {
    id: Number,
    name: string,
    tasks: TaskInterface[],
    ownerId: Number,
    status: boolean
  }
