import { ITodo, ITodoAll } from '../interfaces/ITodo';
import { Api } from '../providers';

const getAllTodos = () => Api.get<ITodoAll>('/v1/todos');

const createTodo = (todo: Pick<ITodo, 'task' | 'isDone'>) => Api.post<ITodoAll>('/v1/todos', todo);

export const TodoService = {
    getAllTodos,
    createTodo,
};
