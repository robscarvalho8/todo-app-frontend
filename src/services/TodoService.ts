import { ITodo, ITodoAll } from '../interfaces/ITodo';
import { Api } from '../providers';

const getAllTodos = () => Api.get<ITodoAll>('/v1/todos');

const createTodo = (todo: Pick<ITodo, 'task' | 'isDone'>) => Api.post<ITodoAll>('/v1/todos', todo);

const updateTodo = (id: string, todo: Pick<ITodo, 'task' | 'isDone'>) => Api.put<ITodoAll>(`/v1/todos/${id}`, todo);

export const TodoService = {
    getAllTodos,
    createTodo,
    updateTodo,
};
