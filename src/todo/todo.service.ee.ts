import TodoServiceCe from '@ce/todo/todo.service.ce';
import { Todo } from '@ce/todo/todo.entity';
import { Repository } from 'typeorm';
import { isEmpty, kebabCase } from 'lodash';

// Override only the create method and leave the rest
export default class TodoServiceEe extends TodoServiceCe {
  async create(todoRepository: Repository<Todo>, title: string): Promise<Todo> {
    console.log('TodoServiceEe create method called');
    const todo = new Todo();
    title = isEmpty(title) ? kebabCase('New Todo') : title;
    todo.title = `[EE Edition] ${title}`;
    return todoRepository.save(todo);
  }

  async update(
    todoRepository: Repository<Todo>,
    id: number,
    isCompleted: boolean,
    title: string,
  ): Promise<Todo> {
    console.log('TodoServiceEe update method called');
    const todo = await todoRepository.findOne({ where: { id } });
    if (!todo) throw new Error(`Todo with id ${id} not found`);
    todo.isCompleted = isCompleted;
    title = isEmpty(title) ? kebabCase('Edited Todo') : title;
    todo.title = `[EE Edition] ${title}`;

    return todoRepository.save(todo);
  }
  // Other methods will fall back to base implementation
}
