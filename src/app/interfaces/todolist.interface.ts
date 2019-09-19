import { Task } from './task.interface';

export interface TodoList {
    id: Number,
    name: string,
    tasks: Task[],
    ownerId: Number,
    status: boolean
  }
