import { ITodoService } from '@ce/todo/types';
import { Todo } from '@ce/todo/todo.entity'
import { Repository } from 'typeorm';

// Override only the create method and leave the rest
  export default class TodoEEService implements Partial<ITodoService> {
  async create(todoRepository: Repository<Todo>, title: string): Promise<Todo> {
    const todo = new Todo();
    todo.title = title;
    return todoRepository.save(todo);
  }
  // Other methods will fall back to base implementation
};
