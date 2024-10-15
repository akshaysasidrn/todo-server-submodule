import TodoServiceCe from '@ce/todo/todo.service.ce';
import { Todo } from '@ce/todo/todo.entity';
import { Repository } from 'typeorm';
import { isEmpty, kebabCase } from 'lodash';

// Override only the create method and leave the rest
export default class TodoServiceEe extends TodoServiceCe {
  async create(todoRepository: Repository<Todo>, title: string): Promise<Todo> {
    console.log('TodoServiceEe create method called');
    const todo = new Todo();
    isEmpty(title) ? (title = kebabCase('New Todo')) : title;
    todo.title = `[EE Edition] ${title}`;
    return todoRepository.save(todo);
  }
  // Other methods will fall back to base implementation
}
